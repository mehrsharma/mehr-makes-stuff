import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled'
import { Colors } from '../components/styles-and-constants';
import { StyledButton, TypographyTheme } from '../components/styles-and-constants';
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
  return (
    <Container component="div" sx={{ display: "flex", justifyContent: "left", backgroundColor: "#4C4E52", padding: "20px", flexDirection: "column"}} maxWidth = {false} id="contact">
      <ThemeProvider theme = {TypographyTheme}>
        <Typography variant="h3" color={Colors.white} sx={{paddingTop: "1%"}}> contact </Typography>
        <Typography variant="h4" color={Colors.white} sx={{paddingBottom: "2%"}}> thanks for visiting! check back soon or feel free to reach out by hitting the icons below </Typography>
        <Typography variant="h4" color={Colors.white} sx={{paddingBottom: "2%", textAlign: "center"}}><SocialIcon bgColor= "#FFFFFF" url="https://www.linkedin.com/in/mehr-sharma/" />      <SocialIcon bgColor= "#FFFFFF" url="https://github.com/mehrsharma" /> </Typography>
        </ThemeProvider>
    </Container>
  );
}