import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode, JSX } from 'react'
import { useRouter } from 'tuono'

/**
 * Every page in the documentation/tutorial must be
 * structured according to this interface.
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

interface ContentManagerContextValue extends PageLocation {
  navigationTree: NavigationTree
}

interface PageLocation {
  currentPage: Page | undefined
  nextPage: Page | undefined
  previousPage: Page | undefined
  currentPageBreadcrumb: Array<Page>
}

/**
 * This function returns an array containing all parent pages of the current page
 * and the current page.
 *
 * This recursive function is implemented using the Depth-First Search (DFS)
 * algorithm.
 */
const findPageAndParents = (
  tree: NavigationTree,
  targetPath: string,
  currentPath: Page[] = [],
): Page[] | null => {
  for (const page of tree) {
    const newPath = [...currentPath, page]

    if (page.path === targetPath) {
      return newPath
    }

    if (page.pages) {
      const result = findPageAndParents(page.pages, targetPath, newPath)
      if (result) {
        return result
      }
    }
  }

  return null
}

const ContentManagerContext = createContext<ContentManagerContextValue>({
  navigationTree: [],
  currentPage: undefined,
  nextPage: undefined,
  previousPage: undefined,
  currentPageBreadcrumb: [],
})

const getPageLocation = (
  navigationTree: NavigationTree,
  pathname: string,
): PageLocation => {
  const flattenTree = (tree: Array<Page>): Array<Page> => {
    return tree.reduce<Array<Page>>((acc, page) => {
      acc.push(page)
      if (page.pages) {
        acc.push(...flattenTree(page.pages))
      }
      return acc
    }, [])
  }

  const pages = flattenTree(navigationTree)

  const currentPageIndex = pages.findIndex((page) => page.path === pathname)
  const currentPageBreadcrumb =
    findPageAndParents(navigationTree, pathname) || []

  return {
    currentPage: pages[currentPageIndex],
    nextPage: pages[currentPageIndex + 1],
    previousPage: pages[currentPageIndex - 1],
    currentPageBreadcrumb,
  }
}

interface ContentManagerProviderProps {
  children: ReactNode
  navigationTree: NavigationTree
}

export function ContentManagerProvider({
  children,
  navigationTree,
}: ContentManagerProviderProps): JSX.Element {
  const { pathname } = useRouter()
  const [relativePages, setRelativePages] = useState<PageLocation>(
    getPageLocation(navigationTree, pathname),
  )

  useEffect(() => {
    setRelativePages(getPageLocation(navigationTree, pathname))
  }, [pathname, navigationTree])

  const context: ContentManagerContextValue = useMemo(
    () => ({
      navigationTree,
      ...relativePages,
    }),
    [navigationTree, relativePages],
  )

  return (
    <ContentManagerContext.Provider value={context}>
      {children}
    </ContentManagerContext.Provider>
  )
}

export function useContentManager(): ContentManagerContextValue {
  return useContext(ContentManagerContext)
}
