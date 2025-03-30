import { useState, useEffect, type JSX } from 'react'

import { useTheme } from 'next-themes'

import styles from './theme-switch.module.scss'

export default function ThemeSwitch(): JSX.Element | null {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={styles['theme-switch']}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      <span></span>
      {resolvedTheme === 'dark' ? `Light` : `Dark`}
    </div>
  )
}
