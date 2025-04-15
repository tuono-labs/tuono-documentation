import type { JSX, SVGProps } from 'react'

export function IconChipArrow(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.75 5.25C0.335786 5.25 0 5.58579 0 6C0 6.41421 0.335786 6.75 0.75 6.75V5.25ZM12.7803 6.53033C13.0732 6.23744 13.0732 5.76256 12.7803 5.46967L8.00736 0.696699C7.71447 0.403806 7.23959 0.403806 6.9467 0.696699C6.65381 0.989593 6.65381 1.46447 6.9467 1.75736L11.1893 6L6.9467 10.2426C6.65381 10.5355 6.65381 11.0104 6.9467 11.3033C7.23959 11.5962 7.71447 11.5962 8.00736 11.3033L12.7803 6.53033ZM0.75 6.75H12.25V5.25H0.75V6.75Z"
        fill="currentColor"
      />
    </svg>
  )
}
