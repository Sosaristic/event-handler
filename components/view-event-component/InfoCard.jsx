import React from 'react'
import { Avatar, Typography, Box } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function InfoCard({item}) {
  const {text1, text2, avatar} = item
  return (
    <Box px={2} sx={{display: "flex", height: "5rem", gap: 2,}}>
      <Avatar>{avatar}</Avatar>
      <Box>
        <Typography sx={{color: "grey.700"}}>{text1}</Typography>
        <Typography variant='header1' sx={{marginTop: 2, fontWeight: 700}}>{text2}</Typography>

      </Box>
    </Box>
  )
}
