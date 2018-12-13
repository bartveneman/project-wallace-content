import withPosts, { inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'
import Layout from '../components/layout'

export default withPosts(({ posts }) => {
  const docs = posts.filter(inCategory('docs'))

  return (
    <Layout>
      <h1>Docs</h1>

      <ol>
        {docs.map(doc => {
          return (
            <li>
              <h2>
                <Link href={doc.data.url}>
                  <a>{doc.data.title}</a>
                </Link>
              </h2>
              <Content {...doc} excerpt />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
})
