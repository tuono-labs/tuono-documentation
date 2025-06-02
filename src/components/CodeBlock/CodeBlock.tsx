import type { JSX } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import rust from 'react-syntax-highlighter/dist/esm/languages/hljs/rust'

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
import { FileNameBlock } from './FileNameBlock'

import styles from './CodeBlock.module.scss'

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
SyntaxHighlighter.registerLanguage('typescript', ts)
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
SyntaxHighlighter.registerLanguage('rust', rust)

const DEFAULT_LANGUAGE = 'plaintext'

export interface Children {
  props?: {
    children: Children
  }
}

interface CodeBlockProps {
  children: Children
  language?: string
  showLineNumbers?: boolean
  fileName?: string
}

function recursiveChildrenToString(children: Children): string {
  if (children.props?.children) {
    return recursiveChildrenToString(children.props.children)
  }

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  return children.toString().trim()
}

export function CodeBlock({
  children,
  language = DEFAULT_LANGUAGE,
  showLineNumbers,
  fileName,
}: CodeBlockProps): JSX.Element {
  const { theme } = useTheme()
  const code = recursiveChildrenToString(children)

  return (
    <div className={styles.wrapper}>
      <FileNameBlock fileName={fileName} code={code} />
      <ScrollAreaRoot className={styles.scrollArea}>
        <ScrollAreaViewport className={styles.viewport}>
          <SyntaxHighlighter
            language={language}
            style={theme === 'dark' ? githubDark : githubLight}
            showLineNumbers={showLineNumbers}
            className={styles.codeBlock}
          >
            {code}
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
