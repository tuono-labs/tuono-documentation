import type { JSX, SVGProps } from 'react'

export function IconCopyPaste(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 0.5H10C10.8284 0.5 11.5 1.17157 11.5 2V7C11.5 7.82843 10.8284 8.5 10 8.5H9C8.72386 8.5 8.5 8.27614 8.5 8V4.5C8.5 3.94772 8.05228 3.5 7.5 3.5H4C3.72386 3.5 3.5 3.27614 3.5 3V2C3.5 1.17157 4.17157 0.5 5 0.5Z"
        stroke="currentColor"
      />
      <rect
        x="0.5"
        y="3.5"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
      />
    </svg>
  )
}
