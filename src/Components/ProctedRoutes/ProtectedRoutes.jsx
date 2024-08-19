import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



export default function ProtectedRoutes() {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')
    console.log(isLoggedIn);


    return isLoggedIn === 'true' ? <Outlet /> : <Navigate to={'/login'} />
}
