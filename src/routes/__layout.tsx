import type { JSX } from 'react'
import { useEffect } from 'react'
import { TuonoScripts } from 'tuono'
import type { TuonoLayoutProps } from 'tuono'

import { PostHogProvider, PostHogPageView } from '@/components/PostHog'

import App from '@/components/App'

import '@/styles/global.scss'
import { useTheme, TUONO_THEME_LOCAL_STORAGE_KEY } from '@/hooks/useTheme'

export default function RootRoute({ children }: TuonoLayoutProps): JSX.Element {
  const { theme } = useTheme()

  useEffect(() => {
    if (document.documentElement.getAttribute('data-theme') !== theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script id="check-dark-mode">
          {`(()=>{let e=localStorage.getItem("${TUONO_THEME_LOCAL_STORAGE_KEY}"),t;if(null!==e){let l=JSON.parse(e);t=l?"dark":"light"}else{let a=window.matchMedia("(prefers-color-scheme: dark)").matches;t=a?"dark":"light"}document.documentElement.setAttribute("data-theme",t)})();`}
        </script>
      </head>
      <body>
        <PostHogProvider>
          <PostHogPageView />
          <App>{children}</App>
        </PostHogProvider>
        <TuonoScripts />
      </body>
    </html>
  )
}
