import type { JSX } from 'react'
import type { TuonoLayoutProps } from 'tuono'

import MdxProvider from '@/components/MdxProvider'

import styles from './App.module.scss'

export default function App({ children }: TuonoLayoutProps): JSX.Element {
  return (
    <div className={styles.container}>
      <MdxProvider>{children}</MdxProvider>
    </div>
  )
}
