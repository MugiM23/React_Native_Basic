import React, { useState, useEffect, useContext } from 'react'

import { AppScreens, AuthScreens } from './navigation/AppRoutes'
import { UserContext } from './context/context'

export default function AuthLoadingScreen() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { isUserLogged } = useContext(UserContext)

  useEffect(() => {
    setIsLoggedIn(isUserLogged)
  }, [isUserLogged])

  return (
    isLoggedIn ? <AppScreens /> : <AuthScreens />
  )
}
