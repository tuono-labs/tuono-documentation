import type { ReactNode, JSX } from 'react'

import { ContentManagerProvider } from '@/components/ContentManager/ContentManagerContext'
import type { Page } from '@/components/ContentManager/ContentManagerContext'
import { ResponsiveLayout } from '@/components/ResponsiveLayout/ResponsiveLayout'
import { Breadcrumbs } from '@/components/Breadcrumbs'

// TODO: Add descriptions
// TODO: Add seoTitles
const tutorialTree: Array<Page> = [
  {
    title: 'Tutorial',
    path: '/tutorial',
    description: 'Tutorial description',
    seoTitle: 'Tutorial',
    pages: [
      {
        title: 'Intro',
        path: '/tutorial/intro',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Development setup',
        path: '/tutorial/development-setup',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'API fetching',
        path: '/tutorial/api-fetching',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Components',
        path: '/tutorial/components',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Error handling',
        path: '/tutorial/error-handling',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'SEO and meta tags',
        path: '/tutorial/seo',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Redirections',
        path: '/tutorial/redirections',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Production build',
        path: '/tutorial/production',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Conclusions',
        path: '/tutorial/conclusions',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
    ],
  },
]

interface TutorialLayoutProps {
  children: ReactNode
}

export default function TutorialLayout({
  children,
}: TutorialLayoutProps): JSX.Element {
  return (
    <ContentManagerProvider navigationTree={tutorialTree}>
      <ResponsiveLayout>
        <Breadcrumbs />
        {children}
      </ResponsiveLayout>
    </ContentManagerProvider>
  )
}
