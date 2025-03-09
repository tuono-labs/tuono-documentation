interface ImportMetaEnv {
  readonly TUONO_PUBLIC_POSTHOG_KEY: string
  readonly TUONO_PUBLIC_POSTHOG_HOST: string
  readonly TUONO_PUBLIC_POSTHOG_ENABLE: 'true' | 'false'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
