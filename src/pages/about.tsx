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
    <Container component="div" sx={{ display: "flex", justifyContent: "left", backgroundColor: "#FFFFFF", padding: "20px", flexDirection: "column"}} maxWidth = {false} id="about">
      <ThemeProvider theme = {TypographyTheme}>
        <Typography variant="h3" color={Colors.darkGrey} sx={{paddingTop: "1%"}}> about </Typography>
        <Typography variant="h4" color={Colors.darkGrey}> hi! my name's Mehr and I'm a fourth year computer engineering student at uWaterloo. I'm a full-stack engineer and a bit of an artist too. check out some of my work below, or head over to the <Link to="contact" smooth={true} duration={500} style={linkStyle}>contact</Link> section to learn more about my dev work!</Typography>
        <Typography variant="h5" color={Colors.darkGrey} sx={{paddingBottom: "3%"}}>(this site was made using react and materialUI with typescript)</Typography>
        </ThemeProvider>
    </Container>
  );
}