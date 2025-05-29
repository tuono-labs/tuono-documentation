import type { ReactNode, JSX } from 'react'

import { SideNavigation } from '@/components/SideNavigation'

import { Breadcrumbs } from '../Breadcrumbs'

import { TableOfContents } from '../TableOfContents'
import { ScrollArea } from '../ScrollArea'

import styles from './ResponsiveLayout.module.scss'

interface ResponsiveLayoutProps {
  children: ReactNode
  withSideNavigation?: boolean
  withBreadcrumbs?: boolean
}

/**
 * This layout manages the layout of the pages with sidebar and table of
 * contents.
 */
export function ResponsiveLayout({
  children,
  withSideNavigation = true,
  withBreadcrumbs = true,
}: ResponsiveLayoutProps): JSX.Element {
  return (
    <div className={styles.layout}>
      {withSideNavigation && (
        <aside className={styles.sidebar}>
          <SideNavigation />
        </aside>
      )}
      <article className={styles.body} id="mdx-root">
        {withBreadcrumbs && <Breadcrumbs />}
        {children}
      </article>
      <div className={styles.tableOfContents}>
        <ScrollArea>
          <TableOfContents />
        </ScrollArea>
      </div>
    </div>
  )
}
