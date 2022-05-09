import React from 'react'
import { useAuth } from '../../context/authContext'
import LoginForm from '../Forms/LoginForm';
import "./index.scss";

export default function Login() {
const context = useAuth();
  return (
    <div className="login-container">
      <h1>Identificate</h1>
      <LoginForm />
    </div>
  )
}
