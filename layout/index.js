import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../components/footer'
import Header from '../components/header'
import Login from '../components/Login'
import { loadUser } from '../redux/authSlice'

export default function Layout({ children }) {
    const dispatch = useDispatch()
    useEffect(async() => {
        await dispatch(loadUser())
    }, [])
    

    return (
        <div className="container">
            <Header />
            <Login />
            {children}
            <Footer />
        </div>
    )
}
