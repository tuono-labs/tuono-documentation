import type { JSX } from 'react'

import cx from 'clsx'
import { Link } from 'tuono'

import type { Page } from '@/components/ContentManager/ContentManagerContext'
import { useContentManager } from '@/components/ContentManager/ContentManagerContext'
import { BreadcrumbsDivider } from '@/icons/breadcrumbs-divider'

import styles from './Breadcrumbs.module.scss'
import {
  Breadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
} from 'react-aria-components'

interface BreadcrumbsItemProps {
  page: Page
  isLastPage: boolean
}

function BreadcrumbsItem({
  page,
  isLastPage,
}: BreadcrumbsItemProps): JSX.Element {
  return (
    <Breadcrumb className={cx(styles.breadcrumb)}>
      <Link href={!isLastPage ? page.path : ''} className={styles.clickable}>
        {page.title}
      </Link>
      {!isLastPage && <BreadcrumbsDivider className={styles.divider} />}
    </Breadcrumb>
  )
}

export function Breadcrumbs(): JSX.Element {
  const { currentPageBreadcrumb } = useContentManager()
  return (
    <AriaBreadcrumbs className={styles['breadcrumbs-wrapper']}>
      {currentPageBreadcrumb.map((page: Page, i: number) => (
        <BreadcrumbsItem
          key={page.path}
          page={page}
          isLastPage={i === currentPageBreadcrumb.length - 1}
        />
      ))}
    </AriaBreadcrumbs>
  )
}
