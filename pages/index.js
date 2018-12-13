import React from 'react'
import withPosts, { inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'
import Layout from '../components/layout'
import Link from 'next/link'

export default withPosts(({ posts }) => {
  const blogs = posts.filter(inCategory('blog'))
  const docs = posts.filter(inCategory('docs'))

  return (
    <Layout>
      <h1>Home</h1>

      <section>
        <h2>Posts</h2>
        {blogs.map(post => {
          return (
            <article key={post.data.url}>
              <h2>
                <Link href={post.data.url}>
                  <a>{post.data.title}</a>
                </Link>
              </h2>
              <Content {...post} excerpt />
            </article>
          )
        })}

        <Link href="/blog">
          <a>All posts</a>
        </Link>
      </section>

      <section>
        <h2>Docs</h2>
        {docs.map(doc => {
          return (
            <article key={doc.data.url}>
              <h2>
                <Link href={doc.data.url}>
                  <a>{doc.data.title}</a>
                </Link>
              </h2>
              <Content {...doc} excerpt />
            </article>
          )
        })}
      </section>
    </Layout>
  )
})
