import { Box } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout'
import ResponsiveAppBar from '../../components/TestNav'
export default function index() {
  return (
  <div>
    <ResponsiveAppBar />
    <div style={{minHeight: "120vh"}}></div>
    </div>
  )
}
