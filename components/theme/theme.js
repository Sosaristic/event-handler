import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#968176"
        },
        secondary: {
            main: "#f5f5f5"
        },
        custom: {
            main: "#fff"
        },
        action: {
            active: "#968176",
            focusOpacity: 0.5,

        },
      
    },
    typography : {
        fontFamily: `"Heebo", "Roboto", sans-serif`

        
    },
   
})

//dark: "#0d0d0d",
//darkGray: "#121212",
//lightgray: "#1f1f1f",
//text: {
 //   grey: "#868686",
  //  white: "#ffffd9"
   
   //active: "#086767"
