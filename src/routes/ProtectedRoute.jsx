import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

const ADMIN_EMAIL = 'py.hash2023@gmail.com'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}
      >
        로그인 상태를 확인하는 중입니다...
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (user.email !== ADMIN_EMAIL) {
    return <Navigate to="/" replace />
  }

  return children
}