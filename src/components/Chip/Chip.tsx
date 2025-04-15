import type { ReactNode } from 'react'
import type { ButtonProps } from 'react-aria-components'
import { Button } from 'react-aria-components'
import cx from 'clsx'

import styles from './Chip.module.scss'

interface ChipProps extends ButtonProps {
  children: ReactNode
}

export function Chip({ children, ...rest }: ChipProps): ReactNode {
  const hasOnPressHandler = typeof rest.onPress !== 'undefined'
  return (
    <Button
      className={cx(styles.chip, hasOnPressHandler && styles.clickable)}
      {...rest}
    >
      {children}
    </Button>
  )
}
