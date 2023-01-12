// import React, { useState } from "react";
// import { Button, Paper, TextField, Box } from "@mui/material";
// import { Controller, useForm } from "react-hook-form";

// export default function testForm() {
//   const { handleSubmit, reset, control } = useForm();
//   const [myValue, setMyvalue] = useState()
//   const onSubmit = (data) => console.log(data);
//   return (
//     <div>
//       <Box compoanent="form">
//         <Controller
//             name = {"text value"}
//             control={control}
//             render={({field: {onChange, value}})=>(
//                 <Box>
//                      <TextField  onChange={onChange} value={value} label="text value"/>

//                 </Box>

//             )}
//             />
//             <Button type="submit" onClick={handleSubmit(onSubmit)} variant="contained">submit</Button>
//             <Button type="reset" onClick={()=>reset()}>reset</Button>

//         {/* <Controller
//           name={"textValue"}
//           control={control}
//           render={({ field: { onChange, value } }) => (
//             <TextField onChange={onChange} value={value} label={"Text Value"} />
//           )}
//         />
//         <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
//         <Button onClick={() => reset()} variant={"outlined"}>
//           Reset
//         </Button> */}
//       </Box>
//     </div>
//   );
// }

import { useForm, Controller } from "react-hook-form";
import { Input, Box, TextField, MenuItem } from "@mui/material";
import Layout from "../components/Layout";
import { durationFormat } from "../components/componentData/data";
import NavBar from "../components/TestNav";
import Home from "../components/TextEditor";

export default function testForm() {
  const { register, handleSubmit, control, formState: {errors} } = useForm({
    defaultValues: {
        firstName: "",
        number: "",
        eventDurationFormat: "Hours",
    }
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Box>
      <NavBar />
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: "first name is required" }}
        render={({
          field,
          
        }) => (
          <TextField
            autoComplete="off"
            {...field}
            label="first name"
           error={Boolean(errors.firstName)}
           helperText={errors.firstName?.message}

           sx={{marginTop: 3}}
          />
        )}
      />
      <Controller
        name="number"
        control={control}
        rules={{required: "number is required"}}
        render={({
          field,
          
        }) => (
            <div>
                  <TextField
            autoComplete="off"
            type="number"
            {...field}
            label="number"
           error={Boolean(errors.number)}
           helperText={errors.number?.message}

           sx={{marginTop: 3}}
          />
            </div>
        
        )}
      />
     
     <Controller
              name="eventDurationFormat"
              control={control}
              rules={{ required: "Event category is required" }}
              render={({ field }) => (
                <TextField
                  variant="filled"
                  select
                  autoComplete="off"
                  {...field}
                  label="format"
                  error={Boolean(errors.eventDurationFormat)}
                  helperText={errors.eventDurationFormat?.message}
               
                >
                  {durationFormat.map((option) => (
                    <MenuItem key={option} value={option} >
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Home />
      <input type="submit" />
    </Box>
    </Box>
  );
}
