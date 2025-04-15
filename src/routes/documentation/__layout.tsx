import type { JSX } from 'react'
import type { TuonoLayoutProps } from 'tuono'
import { Divider } from '@mantine/core'

import EditPage from '@/components/EditPage'

export default function DocumentationLayout({
  children,
}: TuonoLayoutProps): JSX.Element {
  return (
    <>
      {children}

      <Divider mt={20} mb={10} />

      <EditPage />
    </>
  )
}
