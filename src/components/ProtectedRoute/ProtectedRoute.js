import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {

  if (!props.loggedIn) {
    return <Navigate to="/" />
  } else {
    return (props.children)
  }
}

export default ProtectedRoute
