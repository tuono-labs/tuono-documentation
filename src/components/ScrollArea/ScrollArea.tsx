import type { JSX, ReactNode } from 'react'
import {
  ScrollArea as ScrollAreaRoot,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@radix-ui/react-scroll-area'

import styles from './ScrollArea.module.scss'

export function ScrollArea({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ScrollAreaRoot className={styles.scrollArea}>
      <ScrollAreaViewport className={styles.viewport}>
        {children}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  )
}
