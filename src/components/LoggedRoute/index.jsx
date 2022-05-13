import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext'

export default function LoggedRoute({children}) {
    const {loading,user} = useAuth();

    if(loading) return <h2>Loading</h2>
    
    if(!user) return <Navigate to='/login' />

    return children
}
