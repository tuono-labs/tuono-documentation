import type { TuonoConfig } from 'tuono/config'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

const config: TuonoConfig = {
  vite: {
    alias: {
      '@': 'src',
    },
    plugins: [
      {
        enforce: 'pre',
        ...mdx({
          providerImportSource: '@mdx-js/react',
          remarkPlugins: [remarkGfm],
        }),
      },
    ],
  },
}

export default config
