import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'

export default function Login() {
  const { user, googleLogin } = useContext(AuthContext)
  const { darkMode } = useContext(ThemeContext)

  if (user) {
    return <Navigate to="/admin" replace />
  }

  return (
    <>
      <Header />

      <section
        style={{
          minHeight: '100vh',
          padding: '160px 20px 100px',
          background: darkMode ? '#181818' : '#f8f5f1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '100%',
            maxWidth: '460px',
            background: darkMode ? '#1f1f1f' : 'white',
            padding: '50px 40px',
            borderRadius: '28px',
            boxShadow: darkMode
              ? '0 20px 50px rgba(0,0,0,0.35)'
              : '0 20px 50px rgba(0,0,0,0.08)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              letterSpacing: '4px',
              color: '#8e735b',
              marginBottom: '18px',
            }}
          >
            LULLYDAY ADMIN
          </p>

          <h1
            style={{
              fontSize: '42px',
              fontWeight: '400',
              color: darkMode ? 'white' : '#3d3126',
              marginBottom: '18px',
            }}
          >
            Login
          </h1>

          <p
            style={{
              color: darkMode ? '#d8cfc6' : '#6f6257',
              lineHeight: 1.8,
              marginBottom: '36px',
            }}
          >
            관리자 페이지 이용을 위해
            <br />
            Google 계정으로 로그인해주세요.
          </p>

          <button
            onClick={googleLogin}
            style={{
              width: '100%',
              padding: '18px',
              border: 'none',
              borderRadius: '14px',
              background: '#8e735b',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Google로 로그인
          </button>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}