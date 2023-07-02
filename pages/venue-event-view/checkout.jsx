import React from 'react'
import { useRouter } from 'next/router'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'
import { Box, Container, Divider, Typography } from '@mui/material'
import CheckoutForm from './CheckoutForm'

export default function Checkout() {
  const router = useRouter()
  console.log(router)
  return (
    <Box component="main" sx={{minHeight: "80vh", position: "relative"}}>
      <Breadcrumb>
        <Link href="/" legacyBehavior>
          <a href="/">Home</a>
        </Link>
        <Link href="/" legacyBehavior>
          <a href="/venue-event">venue event</a>
        </Link>
        <Typography>venue event view</Typography>
      </Breadcrumb>
      <Container maxWidth="lg" sx={{marginTop: "3rem", position: "relative"}} >
        <Typography sx={{fontWeight: 700, fontSize: "1.8rem"}}>Order Confirmation</Typography>
        <Divider sx={{margin: "1rem 0"}}/>

        <Box><CheckoutForm />
        <p>hello</p>
        </Box>
      </Container>
      
    </Box>
  )
}
