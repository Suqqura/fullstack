import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('<Blog />', () => {
  let container

  const blog = {
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 25,
    user: {
      username: 'testaaja1',
      name: 'testi tyyppi 1'
    }
  }

  const user = {
    username: 'testaaja1',
    name: 'testi tyyppi 1',
    password: 'testisalasana1'
  }

  beforeEach(() => {
    container = render(<Blog blog={blog} user={user} />).container
  })

  // 5.13
  test('renders title and author, but not url and likes by default', () => {
    const titleElement = screen.getByText('React patterns Michael Chan')
    expect(titleElement).toBeDefined()

    expect(screen.queryByText('https://reactpatterns.com/')).toBeNull()
    expect(screen.queryByText('25 likes')).toBeNull()
  })

  // 5.14
  test('clicking the view button views url, likes, and user', async () => {
    const user = userEvent.setup()
    const buttons = screen.getAllByText('view')
    await user.click(buttons[0])

    expect(screen.getByText('https://reactpatterns.com/')).toBeDefined()
    expect(screen.getByText('25 likes')).toBeDefined()
    expect(screen.getByText('added by testi tyyppi 1')).toBeDefined()
  })

  // 5.15 broken 
  test('clicking the like button twice, calls event handler twice', async () => {
    const mockHandler = vi.fn()

    render(
      <Blog blog={blog} user={user} handleLike={mockHandler} />
    )

    const userEvents = userEvent.setup()

    // Click the view button to reveal the like button
    const buttons = screen.getAllByText('view')
    await userEvents.click(buttons[0])
    
    // Now click the like button twice
    const likeButton = screen.getByText('like')
    await userEvents.click(likeButton)
    await userEvents.click(likeButton)

    // Expect the mockHandler to be called twice
    expect(mockHandler.mock.calls).toHaveLength(2)
  })
})
