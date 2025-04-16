import type { JSX, SVGProps } from 'react'

export function IconX(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_564_324)">
        <path
          d="M3.3335 3.83333L13.111 17.1667H16.6668L6.88933 3.83333H3.3335Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.3335 17.1667L8.9735 11.5267M11.0235 9.47666L16.6668 3.83333"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_564_324">
          <rect
            width={20}
            height={20}
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
