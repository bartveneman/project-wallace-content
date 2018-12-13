import { inCategory, withPostsFilterBy } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'
import Layout from '../components/layout'

const fromDocs = withPostsFilterBy(inCategory('docs'), {
  includeSubCategories: true
})

export default fromDocs(({ posts }) => {
  return (
    <Layout>
      <h1>Docs</h1>

      <ol>
        {posts.map(doc => {
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
