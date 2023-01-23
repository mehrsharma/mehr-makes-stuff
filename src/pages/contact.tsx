import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import { Colors } from '../components/styles-and-constants';
import { TypographyTheme } from '../components/styles-and-constants';

import { SocialIcon } from 'react-social-icons';

export default function Contact() {
  return (
    <Container component="div" sx={{ display: "flex", justifyContent: "left", backgroundColor: "#FFFFFF", padding: "20px", flexDirection: "column"}} maxWidth = {false} id="contact">
      <ThemeProvider theme = {TypographyTheme}>
        <Typography variant="h3" color={Colors.darkGrey} sx={{paddingTop: "1%"}}> contact </Typography>
        <Typography variant="h4" color={Colors.darkGrey} sx={{paddingBottom: "2%"}}> thanks for visiting! check back soon or feel free to reach out by hitting the icons below </Typography>
        <Typography variant="h4" color={Colors.darkGrey} sx={{paddingBottom: "2%", textAlign: "center"}}><SocialIcon url="https://www.linkedin.com/in/mehr-sharma/" />      <SocialIcon url="https://github.com/mehrsharma" /> </Typography>
        </ThemeProvider>
    </Container>
  );
}