import { JSX } from 'react'

import { ThemeSwitch } from '@/components/ThemeSwitch'
import styles from './Navbar.module.scss'

export function Navbar(): JSX.Element {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.background} />
        <div className={styles.content}>
          <ThemeSwitch />
        </div>
      </nav>
      <div className={styles['navbar-spacing']} />
    </>
  )
}
