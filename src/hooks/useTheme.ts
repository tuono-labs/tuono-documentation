import { useDarkMode } from 'usehooks-ts'

type Theme = 'light' | 'dark'

interface UseThemeResults {
  toggle: () => void
  theme: Theme
}

const isServer = typeof window === 'undefined'

/**
 * Custom hook to manage theme (light/dark mode).
 *
 * @returns {UseThemeResults} An object containing the current theme and a function to toggle it.
 */
export function useTheme(): UseThemeResults {
  const { isDarkMode, toggle } = useDarkMode({
    initializeWithValue: isServer ? false : undefined,
  })

  return {
    toggle,
    theme: isDarkMode ? 'dark' : 'light',
  }
}
