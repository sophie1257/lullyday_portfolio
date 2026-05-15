import {
  createContext,
  useEffect,
  useState,
} from 'react'

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

import { auth } from '../firebase/firebase'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const provider = new GoogleAuthProvider()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Google login error:', error)
      alert('로그인 중 오류가 발생했습니다.')
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Logout error:', error)
      alert('로그아웃 중 오류가 발생했습니다.')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        googleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}