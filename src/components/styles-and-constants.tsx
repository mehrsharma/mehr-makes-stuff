import { Button } from '@mui/material';
import styled from '@emotion/styled'


export const TypographyTheme = {
    typography: {
        h1: {
            fontSize: "10rem",
            fontFamily: [
                'Kooltura',
            ].join(','),
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
                'RobotoLight',
            ].join(','),
            fontWeight: "300",
        },
        h4: {
            fontSize: "2rem",
            fontFamily: [
                'RobotoThin',
            ].join(','),
            fontWeight: "100",
        },
        h5: {
            fontSize: "1rem",
            fontFamily: [
                'RobotoThin',
            ].join(','),
            fontWeight: "100",
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
    lightGrey: "#D3D3D3",
    lightGreen: "#b3cf99",
    darkGreen: "#4b6043",
    beige: "#FFFAF0",
    white: "#FFFFFF"
}