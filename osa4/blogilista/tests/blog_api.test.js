const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')

const Blog = require('../models/blog')
const User = require('../models/user')
const logger = require('../utils/logger')
const helper = require('./test_helper')


// before each test, clear the db and add two blogs
beforeEach(async () => {
  await Blog.deleteMany({})
  await User.deleteMany({})

  const passwordHash = await bcrypt.hash('sekret', 10)
  const user = new User({ username: 'root', passwordHash })
  await user.save()

  const blogObjects = helper.initialBlogs.map(blog => new Blog({ ...blog, user: user._id }))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

describe('iniatially some blogs saved', () => {

  // test that blogs are returned as json
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  // test that there are right amount of blogs
  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    logger.info('number of blogs:', response.body.length)

    assert.strictEqual(response.body.length, 2)
  })
})

describe('viewing a specific blog', () => {

  // test ids, it should be id and not _id
  test('unique identifier is named id', async () => {
    const response = await api.get('/api/blogs')
    const ids = response.body.map(blog => blog.id)
    logger.info('Blog IDs:', ids)
    ids.forEach(id => {
      assert(id !== undefined)
    })
  })
})

describe('addition of a new blog', () => {

  // test that a new blog can be added
  test('succeeds with a valid data', async () => {
    const newBlog = {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12
    }

    const token = await helper.getValidToken()

    await api
      .post('/api/blogs')
      .set('Authorization', `Bearer ${token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    const titles = response.body.map(r => r.title)

    assert.strictEqual(response.body.length, helper.initialBlogs.length + 1)
    assert(titles.includes(newBlog.title))
  })

  // test that a blog without likes can be added
  test('blog without likes defaults to 0', async () => {
    const newBlog = {
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll"
    }

    const token = await helper.getValidToken()

    const response = await api
      .post('/api/blogs')
      .set('Authorization', `Bearer ${token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const addedBlog = response.body
    logger.info("added blog:", addedBlog)

    assert.strictEqual(addedBlog.likes, 0)
  })

  // test that a blog without title or url cannot be added
  test('blog without title or url cannot be added', async () => {
    const newBlog = {
      author: "Robert C. Martin",
      likes: 0
    }

    const token = await helper.getValidToken()

    await api
      .post('/api/blogs')
      .set('Authorization', `Bearer ${token}`)
      .send(newBlog)
      .expect(400)

    const response = await api.get('/api/blogs')
    assert.strictEqual(response.body.length, helper.initialBlogs.length)
  })
})

describe('deletion of a blog', () => {

  // test that a blog can be deleted
  test('succeeds with status code 204 if id is valid', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    const token = await helper.getValidToken()

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()

    assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length - 1)

    const titles = blogsAtEnd.map(r => r.title)
    assert(!titles.includes(blogToDelete.title))
  })
})

describe('updating a blog', () => {

  // test that a blog can be updated
  test('succeeds with a valid data', async () => {
    const blogsAtStart = await Blog.find({})
    const blogToUpdate = blogsAtStart[0]
    const updatedBlog = { ...blogToUpdate._doc, likes: 100 }

    await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send(updatedBlog)
      .expect(200)

    const blogsAtEnd = await Blog.find({})
    const likes = blogsAtEnd.map(r => r.likes)

    assert(likes.includes(updatedBlog.likes))
  })
})

// close connectiuon to db
after(async () => {
  await mongoose.connection.close()
})
  