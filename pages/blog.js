import withPosts, { inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'
import Layout from '../components/layout'

export default withPosts(({ posts }) => {
  const blogs = posts.filter(inCategory('blog'))

  return (
    <Layout>
      <h1>Blog</h1>

      <ol>
        {blogs.map(post => {
          return (
            <li>
              <h2>
                <Link href={post.data.url}>
                  <a>{post.data.title}</a>
                </Link>
              </h2>
              <Content {...post} excerpt />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
})
