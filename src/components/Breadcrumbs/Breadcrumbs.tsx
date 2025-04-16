import type { JSX } from 'react'

import cx from 'clsx'
import { Link } from 'tuono'

import type { Page } from '@/components/ContentManager/ContentManagerContext'
import { useContentManager } from '@/components/ContentManager/ContentManagerContext'
import { BreadcrumbsDivider } from '@/icons/breadcrumbs-divider'

import styles from './Breadcrumbs.module.scss'

interface BreadcrumbsItemProps {
  page: Page
  isLastPage: boolean
}

function BreadcrumbsItem({
  page,
  isLastPage,
}: BreadcrumbsItemProps): JSX.Element {
  if (isLastPage) {
    return (
      <span className={cx(styles.breadcrumb, 'semi-bold')}>{page.title}</span>
    )
  }
  return (
    <>
      <Link
        href={page.path}
        className={cx(styles.breadcrumb, styles.clickable)}
      >
        {page.title}
      </Link>
      <BreadcrumbsDivider className={styles.divider} />
    </>
  )
}

export function Breadcrumbs(): JSX.Element {
  const { currentPageBreadcrumb } = useContentManager()
  return (
    <div className={styles['breadcrumbs-wrapper']}>
      {currentPageBreadcrumb.map((page: Page, i: number) => (
        <BreadcrumbsItem
          key={page.path}
          page={page}
          isLastPage={i === currentPageBreadcrumb.length - 1}
        />
      ))}
    </div>
  )
}
