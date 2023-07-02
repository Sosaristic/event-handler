import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import {useForm, Controller} from "react-hook-form"
export default function CheckoutForm() {
    const {handleSubmit, control, formState: {errors}} = useForm({
        defaultValues: {
            surname: "",
            firstname: "",
            email: "",
        }
    })
  return (
    <section sx={{backgroundColor: "green", position: "relative"}}>
        <Typography variant="h5" sx={{color: "red", marginBottom: "4rem"}}>Personal details</Typography>
        <Box component="form" sx={{position: "relative"}}>
            <Controller 
            name='surname'
            control={control}
            rules={{required: "name is required"}}
            render={({field})=>(
                <TextField 
                id='surname'
                label="Surname"
                autoComplete='off'
                {...field}
                sx={{height: "2rem"}}

                />
            )}
            />
        </Box>
    </section>
  )
}
