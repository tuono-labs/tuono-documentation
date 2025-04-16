import type { JSX } from 'react'
import { useContentManager } from '@/components/ContentManager/ContentManagerContext'
import type { Page } from '@/components/ContentManager/ContentManagerContext'
import { Link } from 'tuono'
import cx from 'clsx'

import styles from './SideNavigation.module.scss'

function SubPageLink({ page }: { page: Page }): JSX.Element {
  const { currentPage } = useContentManager()

  const isActive = currentPage?.path === page.path
  return (
    <li className={styles['sub-page']}>
      <Link href={page.path} className={cx(isActive && styles.active)}>
        {page.title}
      </Link>
    </li>
  )
}

function MainBlock({ page }: { page: Page }): JSX.Element {
  return (
    <div className={styles.block}>
      <h3 className={styles['block-title']}>{page.title}</h3>
      <ul className={styles.list}>
        {page.pages?.map((subPage) => (
          <SubPageLink key={subPage.title} page={subPage} />
        ))}
      </ul>
    </div>
  )
}

export function SideNavigation(): JSX.Element {
  const { navigationTree } = useContentManager()
  return (
    <>
      {navigationTree.map((page) => (
        <MainBlock key={page.title} page={page} />
      ))}
    </>
  )
}
