/**
 * Component inspired by: https://github.com/mantinedev/mantine/tree/master/apps/mantine.dev/src/components/TableOfContents
 */
export interface Heading {
  order: number
  content: string
  id: string
  getNode: () => HTMLHeadingElement
}

function getCleanedText(element: HTMLElement): string {
  const clone = element.cloneNode(true) as HTMLElement

  clone.querySelectorAll('code, pre').forEach((codeBlock) => {
    const textNode = document.createTextNode(codeBlock.textContent || '')
    codeBlock.replaceWith(textNode)
  })

  return clone.textContent?.trim() || ''
}

function getHeadingsData(headings: Array<HTMLHeadingElement>): Array<Heading> {
  const result: Array<Heading> = []

  for (const heading of headings) {
    const order = parseInt(heading.getAttribute('data-order') || '1', 10)

    if (order <= 3 && heading.id) {
      result.push({
        order,
        content: getCleanedText(heading),
        id: heading.id,
        getNode: () =>
          document.getElementById(heading.id) as HTMLHeadingElement,
      })
    }
  }

  return result
}

export function getHeadings(): Array<Heading> {
  const root = document.getElementById('mdx-root')

  if (!root) {
    return []
  }

  return getHeadingsData(Array.from(root.querySelectorAll('[data-heading]')))
}
