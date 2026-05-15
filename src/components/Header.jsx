import {
  useContext,
  useEffect,
  useState,
} from 'react'

import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'

import { ThemeContext } from '../context/ThemeContext'

export default function Header() {
  const { cart } = useContext(CartContext)
  
  const totalQuantity = cart.reduce(
  (acc, item) => acc + item.quantity,
  0
  )

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } =
  useContext(ThemeContext)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
          background: scrolled
            ? 'rgba(255,255,255,0.75)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(0,0,0,0.05)'
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
          {/* LOGO */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: scrolled ? '#3d3126' : 'white',
              fontSize: '28px',
              letterSpacing: '4px',
              fontWeight: '300',
            }}
          >
            LULLYDAY
          </Link>

          {/* DESKTOP MENU */}
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
              color={scrolled ? '#3d3126' : 'white'}
            />

            <MenuLink
              to="/login"
              label="Login"
              color={scrolled ? '#3d3126' : 'white'}
            />

            <MenuLink
              to="/admin"
              label="Admin"
              color={scrolled ? '#3d3126' : 'white'}
            />

            <Link
              to="/cart"
              style={{
                textDecoration: 'none',
                color: scrolled ? '#3d3126' : 'white',
                position: 'relative',
                fontSize: '17px',
              }}
            >
              Cart

              <span
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-16px',
                  width: '22px',
                  height: '22px',
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
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleDarkMode}
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '20px',
              color: scrolled
                ? '#3d3126'
                : 'white',
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '280px',
            height: '100vh',
            background: 'white',
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
            />

            <MobileLink
              to="/login"
              label="Login"
              onClick={() => setMenuOpen(false)}
            />

            <MobileLink
              to="/admin"
              label="Admin"
              onClick={() => setMenuOpen(false)}
            />

            <MobileLink
              to="/cart"
              label={`Cart (${totalQuantity})`}
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* RESPONSIVE */}
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
        position: 'relative',
      }}
    >
      {label}
    </Link>
  )
}

function MobileLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        textDecoration: 'none',
        color: '#3d3126',
        fontSize: '24px',
      }}
    >
      {label}
    </Link>
  )
}