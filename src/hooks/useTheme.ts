import { useDarkMode } from '@/patches/useDarkMode'

type Theme = 'light' | 'dark'

interface UseThemeResults {
  toggle: () => void
  theme: Theme
}

export const TUONO_THEME_LOCAL_STORAGE_KEY = 'tuono-docs-dark-mode'
export const DEFAULT_THEME: Theme = 'dark'

/**
 * Custom hook to manage theme (light/dark mode).
 *
 * @returns {UseThemeResults} An object containing the current theme and a function to toggle it.
 */
export function useTheme(): UseThemeResults {
  const { isDarkMode, toggle } = useDarkMode({
    localStorageKey: TUONO_THEME_LOCAL_STORAGE_KEY,
  })

  return {
    toggle,
    theme: isDarkMode ? 'dark' : 'light',
  }
}
