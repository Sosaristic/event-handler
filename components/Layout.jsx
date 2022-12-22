import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Box } from '@mui/material'


export default function Layout({children}) {
  return (
    <Box sx={{position: "relative", backgroundColor: "#f5f5f5", paddingTop: 10}}>
        <NavBar />
        {children}
        <Footer />
    </Box>
  )
}
