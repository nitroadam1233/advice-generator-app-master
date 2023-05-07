import { Box } from "@mui/material";
import React from 'react'
import AdviceContainer from "../AdviceContainer/AdviceContainer";

const ParentContainer = () => {
  return (
    <Box 
    sx={{
        width: "100%",
        height: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"   
    }}
    >
    <AdviceContainer />
    </Box>
  )
}

export default ParentContainer