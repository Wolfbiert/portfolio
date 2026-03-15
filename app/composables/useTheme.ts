// composables/useTheme.ts
// Manages dark/light mode using VueUse useDark.
// VueUse automatically adds/removes 'dark' class on <html>.
import { useDark, useToggle } from '@vueuse/core'

export const useTheme = () => {
  const isDark = useDark({
    // Attribute to set on the html element
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    // Persist preference in localStorage
    storageKey: 'portfolio-theme',
  })

  const toggleTheme = useToggle(isDark)

  return { isDark, toggleTheme }
}
