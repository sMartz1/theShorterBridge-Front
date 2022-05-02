import React from 'react'
import {useAuth } from '../../context/authContext'

export default function Login() {
const context = useAuth();
  return (
    <div>Login</div>
  )
}
