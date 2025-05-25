import type { JSX } from 'react'

import { Button } from 'react-aria-components'

import { useTheme } from '@/hooks/useTheme'

import styles from './theme-switch.module.scss'

export default function ThemeSwitch(): JSX.Element {
  const { toggle } = useTheme()

  return (
    <Button
      onPress={() => {
        toggle()
      }}
      className={styles['theme-switch-button']}
    >
      <span className="caption bold" />
    </Button>
  )
}
