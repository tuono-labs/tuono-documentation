import type { ReactNode, JSX } from 'react'

import MdxProvider from '@/components/MdxProvider'

interface RootRouteProps {
  children: ReactNode
}

export default function App({ children }: RootRouteProps): JSX.Element {
  return <MdxProvider>{children}</MdxProvider>
}
