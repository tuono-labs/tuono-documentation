import type { JSX } from 'react'
import { Tooltip as AriaTooltip } from 'react-aria-components'

import styles from './Tooltip.module.scss'

interface TooltipProps {
  message: string
}

export function Tooltip({ message }: TooltipProps): JSX.Element {
  return (
    <AriaTooltip className={styles.tooltip} offset={4}>
      {message}
    </AriaTooltip>
  )
}
