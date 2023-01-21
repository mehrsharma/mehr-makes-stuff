import * as React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled'


export const TypographyTheme = {
    typography: {
        h1: {
            fontSize: "10rem",
            fontFamily: [
                'Kooltura',
            ].join(','),
            // fontWeight: "800",
            // fontStyle: "italic",
        },
        h2: {
            fontSize: "7rem",
            fontFamily: [
                'Kooltura',
            ].join(','),
            fontWeight: "400",
        },
        h3: {
            fontSize: "4rem",
            fontFamily: [
                'Roboto',
            ].join(','),
            fontWeight: "400",
        },
        h4: {
            fontSize: "2rem",
            fontFamily: [
                'Roboto',
            ].join(','),
            fontWeight: "300",
        },
        h5: {
            fontSize: "1rem",
            fontFamily: [
                'Roboto',
            ].join(','),
            fontWeight: "300",
        },
    },
};
  
export const StyledButton = styled(Button)`
  color: black;
  font-size: 1.5rem;
  text-transform: none;
  font-family: 'HelveticaNeue'
`;

export const Colors = {
    darkGrey: "#4C4E52",
    lightGreen: "#b3cf99",
    darkGreen: "#4b6043",
    beige: "#FFFAF0",
    white: "#FFFFFF"
}