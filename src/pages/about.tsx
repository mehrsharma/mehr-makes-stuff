import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import { Colors } from '../components/styles-and-constants';
import { TypographyTheme } from '../components/styles-and-constants';

import { Link } from 'react-scroll'

const linkStyle = {
    textDecoration: "underline"
}

export default function About() {
  return (
    <Container component="div" sx={{ display: "flex", justifyContent: "left", backgroundColor: Colors.beige, padding: "20px", flexDirection: "column"}} maxWidth = {false} id="about">
      <ThemeProvider theme = {TypographyTheme}>
        <Typography variant="h3" color={Colors.darkGrey} sx={{paddingTop: "1%"}}> about </Typography>
        <Typography variant="h4" color={Colors.darkGrey} sx={{paddingBottom: "30px"}}> Hi! I'm Mehr and this is where I show off my art. Most of the pieces here are created with ink, acrylic paint, or digitally using Procreate and Notability. Check out some of my work below, or head over to the <Link to="contact" smooth={true} duration={500} style={linkStyle}>contact</Link> section to learn more about me!</Typography>
        {/* <Typography variant="h5" color={Colors.darkGrey} sx={{paddingBottom: "3%"}}>(this site was made using react and materialUI with typescript)</Typography> */}
        </ThemeProvider>
    </Container>
  );
}