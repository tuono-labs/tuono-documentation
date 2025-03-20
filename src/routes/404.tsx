import type { JSX } from 'react'
import { Link } from 'tuono'

export default function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 - Not found</h1>

      <p>Sorry, we can’t find the page you’re looking for</p>

      <Link href="/">Back to home</Link>
    </>
  )
}
