import type { JSX, SVGProps } from 'react'

export function BreadcrumbsDivider(
  props: SVGProps<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      width="7"
      height="17"
      viewBox="0 0 7 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.528505"
        y1="16.8336"
        x2="6.5285"
        y2="-0.16641"
        stroke="currentColor"
      />
    </svg>
  )
}
