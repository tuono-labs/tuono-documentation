import type { JSX, ReactNode } from 'react'

import { MDXProvider } from '@mdx-js/react'

import { Title, Text, InlineCode, CodeBlock } from '@/components/Mdx'

interface MdxProviderProps {
  children: ReactNode
}

export function MdxProvider({ children }: MdxProviderProps): JSX.Element {
  return (
    <MDXProvider
      components={{
        a: (props) => <a {...props} />,
        h1: Title(1),
        h2: Title(2),
        h3: Title(3),
        h4: Title(4),
        h5: Title(5),
        h6: Title(6),
        strong: (props) => <strong {...props} />,
        p: Text,
        hr: () => <hr />,
        pre: CodeBlock,
        code: InlineCode,
      }}
    >
      {children}
    </MDXProvider>
  )
}
