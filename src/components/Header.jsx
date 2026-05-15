import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'

export default function Header() {
  const { cart } = useContext(CartContext)

  const [darkMode, setDarkMode] = useState(false)
  const [search, setSearch] = useState('')

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F6F1EB]/80 backdrop-blur-md dark:bg-black/80 dark:text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/">
          <h1 className="text-2xl tracking-[0.3em]">
            LULLY DAY
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest">
          <Link to="/">HOME</Link>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-full bg-white dark:bg-neutral-800 outline-none"
          />

          <Link to="/login">
            LOGIN
          </Link>

          <Link to="/admin">
            ADMIN
          </Link>

          <Link to="/cart" className="relative">
            CART

            {cart.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-[#7A5C49] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          <button
            onClick={toggleDarkMode}
            className="bg-[#7A5C49] text-white px-4 py-2 rounded-full"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}