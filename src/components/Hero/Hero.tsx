import type { JSX } from 'react'

import { Chip } from '../Chip'

export function Hero(): JSX.Element {
  return (
    <>
      <Chip>Just published v0.19.4</Chip>
      <h1 className="main-heading">Modern fullstack framework</h1>
    </>
  )
}
