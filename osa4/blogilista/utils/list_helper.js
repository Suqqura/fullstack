// dummy
const dummy = (blogs) => {
  return 1
}

// blogs length, 0
const blogsLength = (blogs) => {
  return blogs.length
}

// total likes
const totalLikes = (blogs) => {
  const total = blogs.reduce((sum, blog) => sum + blog.likes, 0)
  return total
}

// fav blog
const favoriteBlog = (blogs) => {
  const favorite = blogs.reduce((prev, current) => {
    return (prev.likes > current.likes) 
      ? prev 
      : current
    })
    
    return {
      title: favorite.title,
      author: favorite.author,
      likes: favorite.likes
    }
}

// most blogs
const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const blogCounts = blogs.reduce((counts, blog) => {
    counts[blog.author] = (counts[blog.author] || 0) + 1
    return counts
  }, {})

  const authorWithMostBlogs = Object.keys(blogCounts).reduce((a, b) => 
    blogCounts[a] > blogCounts[b] 
      ? a 
      : b
    )

  return {
    author: authorWithMostBlogs,
    blogs: blogCounts[authorWithMostBlogs]
  }
}

// most likes
const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const likeCounts = blogs.reduce((counts, blog) => {
    counts[blog.author] = (counts[blog.author] || 0) + blog.likes
    return counts
  }, {})

  const authorWithMostLikes = Object.keys(likeCounts).reduce((a, b) => 
    likeCounts[a] > likeCounts[b] 
      ? a 
      : b
  )

  return {
    author: authorWithMostLikes,
    likes: likeCounts[authorWithMostLikes]
  }
}


module.exports = {
  dummy,
  blogsLength,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
  totalLikes,
  favoriteBlog
}
