import type { JSX } from 'react'
import type { TuonoLayoutProps } from 'tuono'

import { ResponsiveLayout } from '@/components/ResponsiveLayout/ResponsiveLayout'

import { ContentManagerProvider } from '@/components/ContentManager/ContentManagerContext'

import type { Page } from '@/components/ContentManager/ContentManagerContext'

// TODO: Add descriptions
// TODO: Add seoTitles
const documentationTree: Array<Page> = [
  {
    title: 'Home',
    path: '/docs',
    description: 'Tutorial description',
    seoTitle: 'Tutorial',
    pages: [
      {
        title: 'Getting started',
        path: '/docs/getting-started',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'Installation',
            path: '/docs/getting-started/installation',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'Setup project',
            path: '/docs/getting-started/setup-project',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
    ],
  },
]

export default function DocumentationLayout({
  children,
}: TuonoLayoutProps): JSX.Element {
  return (
    <ContentManagerProvider navigationTree={documentationTree}>
      <ResponsiveLayout>{children}</ResponsiveLayout>
    </ContentManagerProvider>
  )
}
