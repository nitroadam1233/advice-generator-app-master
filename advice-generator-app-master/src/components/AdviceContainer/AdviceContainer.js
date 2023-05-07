import { ReactComponent as Dice } from "../../images/icon-dice.svg"
import { ReactComponent as Divider } from "../../images/pattern-divider-desktop.svg";
import { ReactComponent as MobileDivider } from "../../images/pattern-divider-mobile.svg"
import { Box, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';

const AdviceContainer = () => {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");
  
  function adviceBtn() {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const advice = data.slip.advice;
        const id = data.slip.id;
        setId(id);
        setAdvice(advice);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  window.onload = () => {
    adviceBtn();
  }

  const Item = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
  }));

  return (
    <Box 
      sx={{
        width: {xs: 450, sm: 500, lg: 575},
        height: 350,
        backgroundColor: "hsl(217, 19%, 25%)",
        borderRadius: 3,
      }}
    >
      <Stack 
        spacing={1}
        justifyContent="center"
        alignItems="center" 
        sx={{
          height: "90%", 
        }}
      >
        <Item>
          <Typography 
          sx={{ 
            fontSize: "10pt", 
            fontWeight: 800, 
            color:"hsl(150, 100%, 66%)",
            letterSpacing: 3
          }}
          >
            ADVICE #{id}
          </Typography>
        </Item>
        <Item>
          <Typography 
            sx={{ 
              fontSize: 28,
              fontWeight: 800,
              color: "white",
              px: 5
            }}
          >
          "{advice}"
          </Typography>
        </Item>
        <Item>
          <Box sx={{ display: {xs: "none", sm: "block" } }}> 
            <Divider />
          </Box> 
          <Box sx={{ display: {xs: "block", sm: "none" } }}>
            <MobileDivider />
          </Box>
        </Item>
      </Stack>
      <Box 
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button 
          onClick={adviceBtn}
          variant="contained" 
          sx={{
            borderRadius: 15,
            mt: 0.5,
            py: 2.5,
            backgroundColor: "hsl(150, 100%, 66%)",
            '&:hover': {
              backgroundColor: "hsl(150, 100%, 66%)",
              boxShadow: "0px 0px 30px 3px hsl(150, 100%, 66%)", 
            },
          }}
        >
          <Dice />
        </Button>
      </Box>
    </Box>
  )
}

export default AdviceContainer