import {
  createContext,
  useEffect,
  useState,
} from 'react'

export const ThemeContext =
  createContext()

export function ThemeProvider({
  children,
}) {
  const [darkMode, setDarkMode] =
    useState(() => {
      const savedTheme =
        localStorage.getItem('darkMode')

      return savedTheme
        ? JSON.parse(savedTheme)
        : false
    })

  useEffect(() => {
    localStorage.setItem(
      'darkMode',
      JSON.stringify(darkMode)
    )

    if (darkMode) {
      document.body.style.background =
        '#181818'

      document.body.style.color =
        'white'
    } else {
      document.body.style.background =
        '#ffffff'

      document.body.style.color =
        '#000'
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}