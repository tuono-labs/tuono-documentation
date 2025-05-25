import { useState, useEffect } from 'react'
import type { JSX } from 'react'

import { Button } from 'react-aria-components'

import styles from './theme-switch.module.scss'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeSwitch(): JSX.Element {
  const [mounted, setMounted] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // useTheme will be undefined until mounted on the client. This means if we
  // try to render UI based on the current theme before mounting on the client,
  // we will get a hydration mismatch error.
  // docs: https://www.npmjs.com/package/next-themes
  if (!mounted) {
    return <div className={styles['theme-switcher-container']} />
  }

  return (
    <Button onPress={() => toggle()} className={styles['theme-switch-button']}>
      <span className="caption bold">
        {theme === 'dark' ? `Light` : `Dark`}
      </span>
    </Button>
  )
}
