import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode, JSX } from 'react'
import { useRouter } from 'tuono'

/**
 * Every page in the documentation/tutorial must be defined with this
 * interface.
 */
export interface Page {
  /**
   * Used for:
   * - Sidebar navigation
   * - Page title
   * - Breadcrumb
   * - Page shortcut title in root pages
   */
  title: string
  /**
   * Used for:
   * - Generate <title> tag
   */
  seoTitle: string
  /**
   * Used for:
   * - Generate <meta name="description"> tag
   * - Page shortcut description in root pages
   */
  description: string
  /**
   * Used for:
   * - Generate canonical URL
   * - Identify current route
   */
  path: string
  /**
   * Used for:
   * - Page content
   */
  pages?: Array<Page>
}

type NavigationTree = Array<Page>

interface ContentManagerResult extends PageLocation {
  navigationTree: NavigationTree
}

interface PageLocation {
  currentPage?: Page
  nextPage?: Page
  previousPage?: Page
}

const ContentManagerContext = createContext<ContentManagerResult>({
  navigationTree: [],
})

interface ContentManagerProviderProps {
  children: ReactNode
  navigationTree: NavigationTree
}

const findPages = (
  navigationTree: NavigationTree,
  pathname: string,
): PageLocation => {
  const flattenTree = (tree: Array<Page>): Array<Page> => {
    return tree.reduce((acc: Array<Page>, page) => {
      acc.push(page)
      if (page.pages) {
        acc.push(...flattenTree(page.pages))
      }
      return acc
    }, [])
  }

  const pages = flattenTree(navigationTree)

  const currentPageIndex = pages.findIndex((page) => page.path === pathname)

  return {
    currentPage: pages[currentPageIndex],
    nextPage: pages[currentPageIndex + 1],
    previousPage: pages[currentPageIndex - 1],
  }
}

export function ContentManagerProvider({
  children,
  navigationTree,
}: ContentManagerProviderProps): JSX.Element {
  const { pathname } = useRouter()
  const [relativePages, setRelativePages] = useState<PageLocation>(
    findPages(navigationTree, pathname),
  )

  useEffect(() => {
    setRelativePages(findPages(navigationTree, pathname))
  }, [pathname, setRelativePages, navigationTree])

  const context: ContentManagerResult = {
    navigationTree,
    ...relativePages,
  }

  return (
    <ContentManagerContext.Provider value={context}>
      {children}
    </ContentManagerContext.Provider>
  )
}

export function useContentManager(): ContentManagerResult {
  return useContext(ContentManagerContext)
}
