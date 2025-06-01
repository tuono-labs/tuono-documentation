import type { JSX } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import {
  ScrollArea as ScrollAreaRoot,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@radix-ui/react-scroll-area'

import { useTheme } from '@/hooks/useTheme'

import githubDark from './themes/github-dark'
import githubLight from './themes/github-light'

import styles from './CodeBlock.module.scss'

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

const DEFAULT_LANGUAGE = 'plaintext'

const resolveLanguage = (className?: string): string => {
  if (!className) return DEFAULT_LANGUAGE
  const match = className.match(/language-(\w+)/)

  const lang = match?.[1] || DEFAULT_LANGUAGE

  if (['js', 'jsx', 'ts', 'tsx'].includes(lang)) {
    return 'typescriptreact'
  }

  if (['rs', 'rust'].includes(lang)) {
    return 'rust'
  }

  if (['scss', 'css'].includes(lang)) {
    return 'scss'
  }

  return DEFAULT_LANGUAGE
}

export function CodeBlock({
  children,
  showLineNumbers = false,
}: CodeBlockProps): JSX.Element {
  const { theme } = useTheme()

  return (
    <div className={styles.wrapper}>
      <ScrollAreaRoot className={styles.scrollArea}>
        <ScrollAreaViewport className={styles.viewport}>
          <SyntaxHighlighter
            language={resolveLanguage(children.props.className)}
            style={theme === 'dark' ? githubDark : githubLight}
            showLineNumbers={showLineNumbers}
            className={styles.codeBlock}
          >
            {children.props.children
              // Needed for removing the leading/trailing whitespace/new lines
              .toString()
              .trim()}
          </SyntaxHighlighter>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar
          className={styles.scrollbar}
          orientation="horizontal"
        >
          <ScrollAreaThumb className={styles.thumb} />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollAreaRoot>
    </div>
  )
}
