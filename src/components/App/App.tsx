import type { JSX } from 'react'
import type { TuonoLayoutProps } from 'tuono'

import { Navbar } from '@/components/Navbar'

import MdxProvider from '@/components/MdxProvider'

import styles from './App.module.scss'

export default function App({ children }: TuonoLayoutProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <MdxProvider>{children}</MdxProvider>
    </div>
  )
}
