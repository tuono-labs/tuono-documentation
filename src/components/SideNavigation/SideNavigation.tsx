import type { JSX } from 'react'
import { useContentManager } from '@/components/ContentManager/ContentManagerContext'
import type { Page } from '@/components/ContentManager/ContentManagerContext'
import { Link } from 'tuono'
import {
  Tree,
  TreeItem,
  TreeItemContent as AriaTreeItemContent,
  Collection,
  Button,
} from 'react-aria-components'
import cx from 'clsx'

import styles from './SideNavigation.module.scss'
import { IconArrow } from '@/icons'

interface TreeItemContentProps {
  hasChildItems: boolean
  page: Page
}

function TreeItemContent({
  hasChildItems,
  page,
}: TreeItemContentProps): JSX.Element {
  const { currentPage } = useContentManager()
  const isActive = currentPage?.path === page.path
  return (
    <>
      <Link href={page.path} className={cx(isActive && styles.active)}>
        {page.title}
      </Link>
      {hasChildItems && (
        <Button slot="chevron" className={styles.arrow}>
          <IconArrow className={styles.icon} />
        </Button>
      )}
    </>
  )
}

function TreeBlock({ page }: { page: Page }): JSX.Element {
  return (
    <div className={styles.block}>
      <h3 className={styles['block-title']}>{page.title}</h3>
      <Tree items={page.pages}>
        {function renderItem(subPage) {
          return (
            <TreeItem
              textValue={subPage.title}
              id={subPage.path}
              key={subPage.path}
              className={styles['sub-page']}
            >
              <AriaTreeItemContent>
                {({ hasChildItems }) => (
                  <TreeItemContent
                    hasChildItems={hasChildItems}
                    page={subPage}
                  />
                )}
              </AriaTreeItemContent>
              <Collection items={subPage.pages}>{renderItem}</Collection>
            </TreeItem>
          )
        }}
      </Tree>
    </div>
  )
}

export function SideNavigation(): JSX.Element {
  const { navigationTree } = useContentManager()
  return (
    <>
      {navigationTree.map((page) => (
        <TreeBlock key={page.path} page={page} />
      ))}
    </>
  )
}
