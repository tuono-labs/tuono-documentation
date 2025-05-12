import type { JSX } from 'react'
import type { TuonoLayoutProps } from 'tuono'

import { ResponsiveLayout } from '@/components/ResponsiveLayout/ResponsiveLayout'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { ContentManagerProvider } from '@/components/ContentManager/ContentManagerContext'

import type { Page } from '@/components/ContentManager/ContentManagerContext'

// TODO: Add descriptions
// TODO: Add seoTitles
const documentationTree: Array<Page> = [
  {
    title: 'Documentation',
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
  {
    title: 'Overview',
    path: '/docs/overview',
    description: 'Tutorial description',
    seoTitle: 'Tutorial',
    pages: [
      {
        title: 'Routing',
        path: '/docs/routing',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'Pages and layouts',
            path: '/docs/routing/defining-routes',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'Dynamic routes',
            path: '/docs/routing/dynamic-routes',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'Link and navigation',
            path: '/docs/routing/link-and-navigation',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'API routes',
            path: '/docs/routing/api-routes',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
      {
        title: 'Rendering',
        path: '/docs/rendering',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'Server side rendering',
            path: '/docs/rendering/server-side-rendering',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'Static site generation',
            path: '/docs/rendering/static-site-generation',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
      {
        title: 'Styles',
        path: '/docs/styles',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'CSS modules',
            path: '/docs/styles/css-modules',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'Tailwind CSS',
            path: '/docs/styles/tailwind-css',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
      {
        title: 'Integrations',
        path: '/docs/integrations',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'TypeScript',
            path: '/docs/integrations/typescript',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'MDX',
            path: '/docs/integrations/mdx',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
    ],
  },
  {
    title: 'API Reference',
    path: '/docs/api-reference',
    description: 'Tutorial description',
    seoTitle: 'Tutorial',
    pages: [
      {
        title: 'Components',
        path: '/docs/components',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'Link',
            path: '/docs/components/link',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
      {
        title: 'Functions',
        path: '/docs/functions',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'useRouter',
            path: '/docs/functions/use-router',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'dynamic',
            path: '/docs/functions/dynamic',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
      {
        title: 'Server utilities',
        path: '/docs/server-utilities',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'Response',
            path: '/docs/server-utilities/response',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'Request',
            path: '/docs/server-utilities/request',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
      {
        title: 'CLI',
        path: '/docs/cli',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Application state',
        path: '/docs/application-state',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Environment variables',
        path: '/docs/environment-variables',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
      {
        title: 'Configuration',
        path: '/docs/configuration',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
    ],
  },
  {
    title: 'Community',
    path: '/docs/community',
    description: 'Tutorial description',
    seoTitle: 'Tutorial',
    pages: [
      {
        title: 'Contributing',
        path: '/docs/community/contributing',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
        pages: [
          {
            title: 'Guidelines',
            path: '/docs/community/contributing/guidelines',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'Local development',
            path: '/docs/community/contributing/local-development',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
          {
            title: 'Pull requests',
            path: '/docs/community/contributing/pull-requests',
            description: 'Tutorial description',
            seoTitle: 'Tutorial',
          },
        ],
      },
      {
        title: 'Support',
        path: '/docs/community/support',
        description: 'Tutorial description',
        seoTitle: 'Tutorial',
      },
    ],
  },
]

export default function DocumentationLayout({
  children,
}: TuonoLayoutProps): JSX.Element {
  return (
    <ContentManagerProvider navigationTree={documentationTree}>
      <ResponsiveLayout>
        <Breadcrumbs />
        {children}
      </ResponsiveLayout>
    </ContentManagerProvider>
  )
}
