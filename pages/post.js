import React from 'react'
import withPost, { Content } from 'nextein/post'
import Link from 'next/link'
import Layout from '../components/layout'

export default withPost(({ post }) => {
  return (
    <Layout>
      <article>
        <h1>{post.data.title}</h1>
        <Content {...post} />
      </article>

      <Link href="/blog">
        <a>Back to blog</a>
      </Link>
    </Layout>
  )
})
