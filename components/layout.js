import React from 'react'
import Link from 'next/link'

export default props => {
  return (
    <main>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/docs">
          <a>Docs</a>
        </Link>
      </nav>
      {props.children}
    </main>
  )
}
