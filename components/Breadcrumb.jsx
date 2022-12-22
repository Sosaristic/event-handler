import React from "react";
import Link from "next/link";
import { Box, Breadcrumbs, Typography } from "@mui/material";

export default function Breadcrumb({children}) {
  return (
    <Box
    
      sx={{
        minHeight: "4rem",
        textAlign: "center",
        position: "relative",
        display: "flex",
       
        alignItems: "center",
        justifyItems: "center",
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1812%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(208%2c 213%2c 219%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c217 C 72%2c188 216%2c69 360%2c72 C 504%2c75 576%2c220.8 720%2c232 C 864%2c243.2 936%2c135.8 1080%2c128 C 1224%2c120.2 1368%2c180 1440%2c193L1440 560L0 560z' fill='rgba(193%2c 200%2c 207%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c362 C 96%2c388.6 288%2c509.6 480%2c495 C 672%2c480.4 768%2c298.6 960%2c289 C 1152%2c279.4 1344%2c415.4 1440%2c447L1440 560L0 560z' fill='rgba(212%2c 217%2c 223%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1812'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
      }}
    >
      <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft: "10%"}}>
        {children}
      </Breadcrumbs>

      <style jsx>{`
        a{
            color: black;
        }    
        a:hover{
            text-decoration: underline;
        }  
      `}

      </style>
    </Box>
  );
}
