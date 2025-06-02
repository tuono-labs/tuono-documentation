import type { JSX } from 'react'

import { CodeBlock as SharedCodeBlock } from '@/components/CodeBlock'
import type { Children } from '@/components/CodeBlock/CodeBlock'

const resolveLanguage = (className?: string): string | undefined => {
  if (!className) return
  const match = className.match(/language-(\w+)/)

  const lang = match?.[1]

  if (!lang) return

  if (['js', 'jsx', 'ts', 'tsx'].includes(lang)) {
    return 'typescriptreact'
  }

  if (['rs', 'rust'].includes(lang)) {
    return 'rust'
  }

  if (['scss', 'css'].includes(lang)) {
    return 'scss'
  }
}

interface CodeBlockProps {
  fileName?: string
  showLineNumbers?: boolean
  children: {
    props: {
      children: string
      className?: string
    }
  }
}

export function CodeBlock(props: CodeBlockProps): JSX.Element {
  return (
    <SharedCodeBlock
      showLineNumbers={false}
      language={resolveLanguage(props.children.props.className)}
    >
      {props.children as Children}
    </SharedCodeBlock>
  )
}
