import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled'
import { Colors } from '../components/styles-and-constants';
import { StyledButton, TypographyTheme } from '../components/styles-and-constants';
import { Link } from 'react-scroll'

const linkStyle = {
    textDecoration: "underline"
}

export default function About() {
  return (
    <Container component="div" sx={{ display: "flex", justifyContent: "left", backgroundColor: "#4C4E52", padding: "20px", flexDirection: "column"}} maxWidth = {false} id="about">
      <ThemeProvider theme = {TypographyTheme}>
        <Typography variant="h3" color={Colors.white} sx={{paddingTop: "1%"}}> about </Typography>
        <Typography variant="h4" color={Colors.white}> hi! my name's Mehr and I'm a fourth year computer engineering student at uWaterloo. I'm a full-stack engineer and a bit of an artist too. check out some of my work below, or head over to the <Link to="contact" smooth={true} duration={500} style={linkStyle}>contact</Link> section to learn more about my dev work!</Typography>
        <Typography variant="h5" color={Colors.white} sx={{paddingBottom: "3%"}}>(this site was made using react and materialUI with typescript. updated as fast as I can make new stuff)</Typography>
        </ThemeProvider>
    </Container>
  );
}