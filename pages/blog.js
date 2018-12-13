import { inCategory, withPostsFilterBy } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'
import Layout from '../components/layout'

const fromBlog = withPostsFilterBy(inCategory('blog'), {
  includeSubCategories: true
})

export default fromBlog(({ posts }) => {
  return (
    <Layout>
      <h1>Blog</h1>

      <ol>
        {posts.map(post => {
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
