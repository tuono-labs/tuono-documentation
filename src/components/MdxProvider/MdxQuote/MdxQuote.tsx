import type { JSX, HTMLAttributes } from 'react'
import { Blockquote } from '@mantine/core'

export default function MdxQuote(
  props: HTMLAttributes<HTMLQuoteElement>,
): JSX.Element {
  return (
    <Blockquote
      py={1}
      px={20}
      my={16}
      iconSize={28}
      {...props}
      bd="solid 1px var(--mantine-color-quote-border)"
      style={{ borderRadius: 8 }}
    />
  )
}
