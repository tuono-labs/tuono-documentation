import { useState, useEffect, type JSX } from 'react'

import { useTheme } from 'next-themes'

import styles from './theme-switch.module.scss'

export default function ThemeSwitch(): JSX.Element | null {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // useTheme will be undefined until mounted on the client. This means if we
  // try to render UI based on the current theme before mounting on the client,
  // we will get a hydration mismatch error.
  // docs: https://www.npmjs.com/package/next-themes
  if (!mounted) {
    return null
  }

  return (
    <button
      className={styles['theme-switch-button']}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? `Light` : `Dark`}
    </button>
  )
}
