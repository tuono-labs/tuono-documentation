import type { ReactNode, JSX } from 'react'

import styles from './ResponsiveLayout.module.scss'

interface ResponsiveLayoutProps {
  children: ReactNode
}

/**
 * This layout manages the layout of the pages with sidebar and table of
 * contents.
 */
export function ResponsiveLayout({
  children,
}: ResponsiveLayoutProps): JSX.Element {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar} />
      <article>{children}</article>
      <div className={styles.tableOfContents} />
    </div>
  )
}
