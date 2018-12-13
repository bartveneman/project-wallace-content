import React from 'react'
import Link from 'nextein/link'

export default props => {
  return (
    <main>
      <nav>
        <Link href="/blog">
          <a>Blog</a>
        </Link>{' '}
        <Link href="/docs">
          <a>Docs</a>
        </Link>
      </nav>
      {props.children}
    </main>
  )
}
