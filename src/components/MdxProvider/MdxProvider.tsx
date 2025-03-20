import type { JSX, ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'

interface MdxProviderProps {
  children: ReactNode
}

export default function MdxProvider({
  children,
}: MdxProviderProps): JSX.Element {
  return (
    <MDXProvider
      components={{
        a: (props) => <a {...props} />,
        h1: (props) => <h1 {...props} />,
        h2: (props) => <h2 {...props} />,
        h3: (props) => <h3 {...props} />,
        h4: (props) => <h4 {...props} />,
        h5: (props) => <h5 {...props} />,
        h6: (props) => <h6 {...props} />,
        strong: (props) => <strong {...props} />,
        p: (props) => <p {...props} />,
        hr: () => <hr />,
      }}
    >
      {children}
    </MDXProvider>
  )
}
