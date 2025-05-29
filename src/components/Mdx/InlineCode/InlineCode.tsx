import type { HTMLAttributes, JSX } from 'react'
import cx from 'clsx'

import styles from './InlineCode.module.scss'

export function InlineCode(props: HTMLAttributes<HTMLPreElement>): JSX.Element {
  return <code {...props} className={cx(styles.inlineCode, 'code-1')} />
}
