import type { JSX, SVGProps } from 'react'

export function IconArrow(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.35355 4.35355C4.54882 4.15829 4.54882 3.84171 4.35355 3.64645L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.29289 4L0.464466 6.82843C0.269204 7.02369 0.269204 7.34027 0.464466 7.53553C0.659728 7.7308 0.976311 7.7308 1.17157 7.53553L4.35355 4.35355ZM3 4.5L4 4.5L4 3.5L3 3.5L3 4.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
