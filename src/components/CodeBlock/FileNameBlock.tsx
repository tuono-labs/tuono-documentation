import type { JSX } from 'react'
import { useState } from 'react'
import { Button, TooltipTrigger } from 'react-aria-components'

import { useCopyToClipboard } from 'usehooks-ts'

import { Tooltip } from '@/components/Tooltip'

import { IconCopyPaste } from '@/icons'

import styles from './FileNameBlock.module.scss'

const TOOLTIP_MESSAGE_RESET_TIME = 1000

interface FileNameBlockProps {
  fileName?: string
  code: string
}

export function FileNameBlock({
  fileName,
  code,
}: FileNameBlockProps): JSX.Element | null {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, copy] = useCopyToClipboard()
  const [tooltipMessage, setTooltipMessage] = useState<string>('Copy')
  if (!fileName) return null

  const handleCopy = async (): Promise<void> => {
    await copy(code).then(() => {
      setTooltipMessage('Copied!')
      setTimeout(() => {
        setTooltipMessage('Copy')
      }, TOOLTIP_MESSAGE_RESET_TIME)
    })
  }

  return (
    <div className={styles.fileName}>
      <p>{fileName}</p>
      <TooltipTrigger delay={0}>
        <Button className={styles.copyBtn} onClick={() => void handleCopy()}>
          <IconCopyPaste className={styles.copyIcon} />
        </Button>
        <Tooltip message={tooltipMessage} />
      </TooltipTrigger>
    </div>
  )
}
