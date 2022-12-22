import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div style={{position: "relative", backgroundColor: "#f5f5f5"}}>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}
