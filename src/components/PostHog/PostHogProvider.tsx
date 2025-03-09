import type { JSX, ReactNode } from 'react'
import { useEffect } from 'react'
import { PostHogProvider as PostHogLibraryProvider } from 'posthog-js/react'
import posthogJs from 'posthog-js'

interface PostHogProviderProps {
  children: ReactNode
}

export default function PostHogProvider({
  children,
}: PostHogProviderProps): JSX.Element {
  useEffect(() => {
    if (import.meta.env.TUONO_PUBLIC_POSTHOG_ENABLE === 'true') {
      posthogJs.init(import.meta.env.TUONO_PUBLIC_POSTHOG_KEY, {
        api_host: import.meta.env.TUONO_PUBLIC_POSTHOG_HOST,
        persistence: 'memory', // Cookieless tracking
        disable_persistence: true, // Disable persistence
        loaded: (ph) => {
          if (import.meta.env.DEV) ph.debug()
        },
      })
    }
  }, [])

  return (
    <PostHogLibraryProvider client={posthogJs}>
      {children}
    </PostHogLibraryProvider>
  )
}
