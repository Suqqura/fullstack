import { useState } from 'react'
import blogService from '../services/blogs'

// one blog
const Blog = ({ blog, user, updateBlogs, blogs }) => {
  const [showDetails, setShowDetails] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  // toggle details = view/hide
  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  // +1 like
  const handleLike = async () => {
    try {
      const updatedBlog = await blogService.update(blog.id, {
        ...blog,
        likes: blog.likes + 1
      })
      updateBlogs(blogs.map(b => (b.id === blog.id ? updatedBlog : b)))
    } catch (error) {
      console.error('Error liking the blog:', error)
    }
  }

  // delete blog
  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)
    if (confirmDelete) {
      try {
        await blogService.remove(blog.id)
        updateBlogs(blogs.filter(b => b.id !== blog.id))
      } catch (error) {
        console.error('Error deleting the blog:', error)
      }
    }
  }


  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={toggleDetails}>
          {showDetails ? 'hide' : 'view'}
        </button>
      </div>
      {showDetails && (
        <div>
          <p>{blog.url}</p>
          <p>
            {blog.likes} likes <button onClick={handleLike}>like</button>
          </p>
          <p>added by {blog.user.name}</p>
          {user.username === blog.user.username && (
            <button onClick={handleDelete}>delete</button>
          )}
        </div>
      )}
    </div>
  )
}

export default Blog
