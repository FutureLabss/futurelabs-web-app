import React, { useContext, useState, useEffect } from 'react'
import { initApi, loginApi, logoutApi, registerApi } from '../api/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('kingpush')
  const [loading, setLoading] = useState(true)

  async function signup(fullname, username, email, password) {
    const response = await registerApi({fullname, username, email, password})
    if (response.error) {
      throw new Error(response.error.error)
    }
    return response
  }


  async function login(email, password) {
    const response = await loginApi({email, password})
    if (response.error) {
      throw new Error(response.error.message.message ?? response.error.message ?? 'Error occured')
    }
    setCurrentUser(response)
    return response
  }

  async function logout() {
    const response = await logoutApi()
    setCurrentUser(null)
    return response
  }


  useEffect(() => {
    const user = initApi()
    setCurrentUser(user)
    setLoading(false)
    return () => { setCurrentUser(null) }

  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout

  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
