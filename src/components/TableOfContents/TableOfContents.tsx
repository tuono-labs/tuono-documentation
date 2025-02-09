import type { JSX, MouseEventHandler } from 'react'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'tuono'
import { Box, ScrollArea, Text } from '@mantine/core'

import { getHeadings } from './getHeadings'
import type { Heading } from './getHeadings'

import classes from './TableOfContents.module.css'

export function TableOfContents(): JSX.Element | null {
  const [activeHeadingIndex, setActiveHeadingIndex] = useState<number | null>(
    null,
  )
  const [headings, setHeadings] = useState<Array<Heading>>([])
  const headingsRef = useRef<Array<HTMLElement>>([])
  const observerRef = useRef<IntersectionObserver | null>(null)
  const router = useRouter()

  useEffect(() => {
    const _headings = getHeadings()
    setHeadings(_headings)
    headingsRef.current = _headings.map((heading) => heading.getNode())

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
            _headings.findIndex((h) => h.id === visibleEntries[0].target.id),
          )
        }
      },
      {
        rootMargin: '-50px 0px -80% 0px',
        threshold: [0.1, 0.5, 1.0],
      },
    )

    headingsRef.current.forEach((node) => {
      observer.observe(node)
    })
    observerRef.current = observer

    const handleHashChange = (): void => {
      setTimeout(() => {
        observerRef.current?.disconnect()
        observerRef.current = observer
        headingsRef.current.forEach((node) => {
          observer.observe(node)
        })
      }, 300)
    }

    window.addEventListener('hashchange', handleHashChange)

    return (): void => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [router.pathname])

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
    <Box component="nav" className={classes.wrapper}>
      <ScrollArea style={{ height: 'calc(100% - 60px)' }}>
        <div className={classes.inner}>
          <div>
            <Text className={classes.title} mb={8}>
              On this page
            </Text>
            <div className={classes.items}>
              {headings.slice(1).map((heading, index) => (
                <Text
                  key={heading.id}
                  component="a"
                  fz="sm"
                  w="fit-content"
                  py={4}
                  className={classes.link}
                  mod={{ active: activeHeadingIndex === index + 1 }}
                  href={`#${heading.id}`}
                  onClick={handleHeadingClick}
                  style={{
                    paddingLeft: `calc(${heading.order - 1} * var(--mantine-spacing-md))`,
                  }}
                >
                  {heading.content}
                </Text>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </Box>
  )
}
