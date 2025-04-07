import type { JSX } from 'react'
import type { TuonoLayoutProps } from 'tuono'

import { ResponsiveLayout } from '@/components/ResponsiveLayout/ResponsiveLayout'

export default function DocumentationLayout({
  children,
}: TuonoLayoutProps): JSX.Element {
  return <ResponsiveLayout>{children}</ResponsiveLayout>
}
