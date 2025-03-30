import type { JSX } from 'react'
import type { TuonoLayoutProps } from 'tuono'

import { ThemeSwitch } from '@/components/ThemeSwitch'

import MdxProvider from '@/components/MdxProvider'

import styles from './App.module.scss'

export default function App({ children }: TuonoLayoutProps): JSX.Element {
  return (
    <div className={styles.container}>
      <ThemeSwitch />
      <MdxProvider>{children}</MdxProvider>
    </div>
  )
}
