import type { HTMLAttributes, JSX, ReactNode } from 'react'

import styles from './Callout.module.scss'

type CalloutLevel = 'info' | 'warning'

interface CalloutProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  level?: CalloutLevel
}

export function Callout(props: CalloutProps): JSX.Element {
  return (
    <blockquote {...props} className={styles.callout}>
      <CalloutIcon level={props.level} />
      {props.children}
    </blockquote>
  )
}

function CalloutIcon({ level }: { level?: CalloutLevel }): JSX.Element | null {
  if (!level) return null

  return (
    <span className={styles.calloutIcon}>
      {level === 'warning' ? '⚠️' : '💡'}
    </span>
  )
}
