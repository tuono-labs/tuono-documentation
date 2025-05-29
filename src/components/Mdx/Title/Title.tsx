import type { JSX, ElementType, HTMLAttributes, ReactNode } from 'react'
import { useRef } from 'react'
import { Link } from 'tuono'
import cx from 'clsx'
import { useHover } from 'usehooks-ts'

import { AnchorLink } from '@/icons/anchor-link'

import styles from './Title.module.scss'

type TitleProps = HTMLAttributes<HTMLHeadingElement>

type Order = 1 | 2 | 3 | 4 | 5 | 6

/**
 * Generates a unique ID from the text content of the children.
 */
function getIdFrom(children: ReactNode): string {
  const getTextContent = (node: ReactNode): string => {
    if (typeof node === 'string') return node
    if (typeof node === 'object' && node !== null && 'props' in node) {
      const child = node as { props?: { children?: ReactNode } }
      return getTextContent(child.props?.children)
    }
    return ''
  }

  const textContent = Array.isArray(children)
    ? children.map(getTextContent).join('')
    : getTextContent(children)

  return (
    textContent
      // normalize cause tuono build --static to hang
      // @see https://github.com/tuono-labs/tuono/issues/468
      // .normalize('NFKD')// separate accented characters into their base form and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // remove all the accents
      .trim()
      .toLowerCase()
      .replace(/\./g, '-') // some titles (configuration) contain keypath, so replace dots with hyphens
      .replace(/\//g, '-') // replace slashes with hyphens (for the home page)
      .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-') // remove consecutive hyphens
  )
}

export const Title = (order: Order): ElementType<TitleProps> => {
  function Render(props: TitleProps): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hoverRef = useRef<HTMLDivElement>(null!)
    const isHover = useHover(hoverRef)

    if (order === 1) {
      return <Heading order={order} {...props} />
    }
    return (
      <div className={styles.wrapper} ref={hoverRef}>
        <Heading order={order} {...props}>
          {props.children}
          {isHover && (
            <Link
              className={styles.link}
              replace
              href={`#${getIdFrom(props.children)}`}
            >
              <AnchorLink />
            </Link>
          )}
        </Heading>
      </div>
    )
  }

  Render.displayName = 'H'

  return Render
}

export function Heading({
  order,
  ...props
}: TitleProps & { order: Order }): JSX.Element {
  props.id = getIdFrom(props.children)
  props.className = cx(`title-${Math.min(order, 4)}`, styles.title)

  switch (order) {
    case 1:
      return <h1 {...props} />
    case 2:
      return <h2 {...props} />
    case 3:
      return <h3 {...props} />
    case 4:
      return <h4 {...props} />
    case 5:
      return <h5 {...props} />
    default:
      return <h6 {...props} />
  }
}
