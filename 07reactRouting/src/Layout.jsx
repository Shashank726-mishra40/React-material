import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from './Componenets/Header/Header'
import Footer from './Componenets/Footer/Footer'
import Home from './Componenets/Home/Home'
import About from './Componenets/About/About'



function Layout(){
    return(
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
    )
}

export default Layout