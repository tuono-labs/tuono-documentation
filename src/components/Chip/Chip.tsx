import type { ReactNode } from 'react'
import { Button, ButtonProps } from 'react-aria-components'
import cx from 'clsx'
import styles from './Chip.module.scss'

interface ChipProps extends ButtonProps {
  children: ReactNode
}

export function Chip({ children, ...rest }: ChipProps): ReactNode {
  const hasOnPressHandler = typeof rest.onPress !== 'undefined'
  return (
    <Button
      className={cx(styles.chip, hasOnPressHandler && styles.pointerCursor)}
      {...rest}
    >
      {children}
    </Button>
  )
}
