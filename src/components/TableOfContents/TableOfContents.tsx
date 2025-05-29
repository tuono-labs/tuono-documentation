import type { JSX, MouseEventHandler } from 'react'
import { useRef, useState, useEffect } from 'react'
import cx from 'clsx'
import { useRouter, Link } from 'tuono'

import { usePageHeadings } from '@/hooks/usePageHeadings'

import styles from './TableOfContents.module.scss'

export function TableOfContents(): JSX.Element | null {
  const [activeHeadingIndex, setActiveHeadingIndex] = useState<number | null>(
    null,
  )
  const headings = usePageHeadings()
  const headingsRef = useRef<Array<HTMLElement>>(
    headings.map((heading) => heading.getNode()),
  )
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { pathname } = useRouter()

  useEffect(() => {
    headingsRef.current = headings.map((heading) => heading.getNode())
  }, [headings])

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleEntries.length > 0) {
          setActiveHeadingIndex(
            headings.findIndex((h) => h.id === visibleEntries[0].target.id),
          )
        }
      },
      {
        rootMargin: '-50px 0px -80% 0px',
        threshold: [0.1, 0.5, 1.0],
      },
    )

    headingsRef.current.forEach((node) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (node) {
        observer.observe(node)
      }
    })
    observerRef.current = observer

    const handleHashChange = (): void => {
      setTimeout(() => {
        observerRef.current?.disconnect()
        observerRef.current = observer
        headingsRef.current.forEach((node) => {
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (node) {
            observer.observe(node)
          }
        })
      }, 300)
    }

    window.addEventListener('hashchange', handleHashChange)

    return (): void => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pathname, headings])

  const handleHeadingClick: MouseEventHandler<HTMLAnchorElement> = (
    event,
  ): void => {
    event.preventDefault()
    const target = event.target as HTMLAnchorElement
    const href = target.getAttribute('href') as string
    const targetHeading = document.querySelector(href)

    if (!targetHeading) return

    history.pushState(null, '', href)
    targetHeading.scrollIntoView({ behavior: 'instant', block: 'start' })
  }

  // Table of contents will not be displayed if the page has one or fewer headings.
  if (headings.length <= 1) {
    return null
  }

  return (
    <nav style={{ height: 'auto' }}>
      <p className={cx('caption', 'bold', styles.title)}>~ on this page</p>
      <ul className={styles.list}>
        {headings.slice(1).map((heading, index) => (
          <Link
            key={heading.id}
            className={cx(
              styles.link,
              'body-2',
              activeHeadingIndex === index + 1 && styles.activeLink,
            )}
            href={`#${heading.id}`}
            replace
            onClick={handleHeadingClick}
            style={{
              paddingLeft: `calc(${heading.order - 1} * 12px)`,
            }}
          >
            {heading.content}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
