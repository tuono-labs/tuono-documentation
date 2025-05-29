import type { HTMLAttributes, JSX } from 'react'
import cx from 'clsx'

import styles from './Text.module.scss'

export function Text(props: HTMLAttributes<HTMLParagraphElement>): JSX.Element {
  return <p {...props} className={cx('body-1', styles.text)} />
}
