import {
  useContext,
  useEffect,
  useState,
} from 'react'

import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'

export default function Header() {
  const { cart } = useContext(CartContext)
  const { darkMode, toggleDarkMode } =
    useContext(ThemeContext)
  const { user, logout } = useContext(AuthContext)

  const totalQuantity = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const textColor = scrolled
    ? darkMode
      ? 'white'
      : '#3d3126'
    : 'white'

  const headerBg = scrolled
    ? darkMode
      ? 'rgba(24,24,24,0.8)'
      : 'rgba(255,255,255,0.75)'
    : 'transparent'

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 999,
          padding: scrolled ? '18px 40px' : '28px 40px',
          transition: '0.4s',
          background: headerBg,
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? darkMode
              ? '1px solid rgba(255,255,255,0.08)'
              : '1px solid rgba(0,0,0,0.05)'
            : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: textColor,
              fontSize: '28px',
              letterSpacing: '4px',
              fontWeight: '300',
            }}
          >
            LULLYDAY
          </Link>

          <nav
            className="desktop-menu"
            style={{
              display: 'flex',
              gap: '34px',
              alignItems: 'center',
            }}
          >
            <MenuLink
              to="/"
              label="Home"
              color={textColor}
            />

            <MenuLink
              to="/admin"
              label="Admin"
              color={textColor}
            />

            {user ? (
              <button
                onClick={logout}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: textColor,
                  cursor: 'pointer',
                  fontSize: '17px',
                }}
              >
                Logout
              </button>
            ) : (
              <MenuLink
                to="/login"
                label="Login"
                color={textColor}
              />
            )}

            <Link
              to="/cart"
              style={{
                textDecoration: 'none',
                color: textColor,
                position: 'relative',
                fontSize: '17px',
              }}
            >
              Cart

              <span
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-18px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#8e735b',
                  color: 'white',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {totalQuantity}
              </span>
            </Link>

            <button
              onClick={toggleDarkMode}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '20px',
                color: textColor,
              }}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: textColor,
              fontSize: '28px',
              cursor: 'pointer',
            }}
            className="mobile-btn"
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '280px',
            height: '100vh',
            background: darkMode ? '#1f1f1f' : 'white',
            zIndex: 1000,
            padding: '120px 40px',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '34px',
            }}
          >
            <MobileLink
              to="/"
              label="Home"
              onClick={() => setMenuOpen(false)}
              darkMode={darkMode}
            />

            <MobileLink
              to="/admin"
              label="Admin"
              onClick={() => setMenuOpen(false)}
              darkMode={darkMode}
            />

            {user ? (
              <button
                onClick={() => {
                  logout()
                  setMenuOpen(false)
                }}
                style={{
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  color: darkMode ? 'white' : '#3d3126',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            ) : (
              <MobileLink
                to="/login"
                label="Login"
                onClick={() => setMenuOpen(false)}
                darkMode={darkMode}
              />
            )}

            <MobileLink
              to="/cart"
              label={`Cart (${totalQuantity})`}
              onClick={() => setMenuOpen(false)}
              darkMode={darkMode}
            />

            <button
              onClick={toggleDarkMode}
              style={{
                border: 'none',
                background: 'transparent',
                textAlign: 'left',
                color: darkMode ? 'white' : '#3d3126',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }

            .mobile-btn {
              display: block !important;
            }
          }
        `}
      </style>
    </>
  )
}

function MenuLink({ to, label, color }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        color,
        fontSize: '17px',
      }}
    >
      {label}
    </Link>
  )
}

function MobileLink({
  to,
  label,
  onClick,
  darkMode,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        textDecoration: 'none',
        color: darkMode ? 'white' : '#3d3126',
        fontSize: '24px',
      }}
    >
      {label}
    </Link>
  )
}