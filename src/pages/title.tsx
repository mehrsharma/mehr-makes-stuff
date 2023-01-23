import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled'
import { Colors } from '../components/styles-and-constants';
import { Link } from 'react-scroll'
// import { StyledButton, TypographyTheme } from '../components/styles-and-constants';

import { useEffect, useState } from 'react';
import { UseWindowDimensions } from '../components/window-resize-handler';

export const StyledButton = styled(Button)`
color: #4C4E52;
font-size: 1.5rem;
text-transform: none;
font-family: 'HelveticaNeue'
`;

export default function Title() {
  const [titleSize, setTitleSize] = useState(["10rem", "7rem"]);
  const { windowWidth } = UseWindowDimensions();
  useEffect(()=> {
    windowWidth > 550 ? setTitleSize(["10rem", "7rem"]) : setTitleSize(["7rem", "5rem"])
 },[windowWidth])

  const TypographyTheme = {
    typography: {
        h1: {
            fontSize: titleSize[0],
            fontFamily: [
                'Kooltura',
            ].join(','),
        },
        h2: {
            fontSize: titleSize[1],
            fontFamily: [
                'Kooltura',
            ].join(','),
            fontWeight: "400",
        },
    },
  };

  const linkStyle = {
    textDecoration: "none", color: "#4C4E52"
  }

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: 680,
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      zIndex: 3
      }}>

      <ThemeProvider theme = {TypographyTheme}>
        <Typography variant="h1" color={Colors.darkGrey}>
            MEHR
        </Typography>
        <Typography variant="h2" color={Colors.darkGrey} gutterBottom>
            SHARMA
        </Typography>
      </ThemeProvider>
      <div style={{width: '100%', maxWidth: 600, flexWrap: 'wrap', margin: '0 auto' }}>
        <StyledButton variant="text" sx={{width: '28%'}}><Link to="about" smooth={true} duration={500} style={linkStyle}>about</Link></StyledButton>
        <StyledButton variant="text" sx={{width: '37%'}}><Link to="doodles" smooth={true} duration={500} style={linkStyle}>doodles</Link></StyledButton>
        <StyledButton variant="text" sx={{width: '33%'}}><Link to="contact" smooth={true} duration={500} style={linkStyle}>contact</Link></StyledButton>
      </div>
    </Box>
  );
}
