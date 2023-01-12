import React from 'react'
import ResponsiveAppBar from './NavBar'
import Footer from './Footer'
import { Box } from '@mui/material'


export default function Layout({children}) {
  return (
    <Box  sx={{position: "relative", backgroundColor: "#f5f5f5", paddingTop: 6, }}>
        <ResponsiveAppBar />
        {children}
        <Footer />
    </Box>
  )
}
