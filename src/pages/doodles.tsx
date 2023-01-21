import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled'
import { Colors } from '../components/styles-and-constants';
import { StyledButton, TypographyTheme } from '../components/styles-and-constants';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { UseWindowDimensions } from '../components/window-resize-handler';
import { GridLoader } from 'react-spinners';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';


function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const StyledImageListItem = styled(ImageListItem)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Doodles() {
//   const [isLoading, setIsLoading] = useState(true);
  const [defaultCol, setDefaultCol] = useState(true);
  const [defaultRow, setDefaultRow] = useState(true);
  const { windowWidth } = UseWindowDimensions();
  useEffect(()=> {
    if(windowWidth < 550){
      setDefaultCol(false);
      setDefaultRow(false);
    } else {
      setDefaultCol(true);
      setDefaultRow(true);
    }
  },[windowWidth])
  const [isLoading, setIsLoading] = useState(
    Array(itemData.length).fill(false)
);
  return (
    <Container component="div" sx={{ display: "flex", justifyContent: "left", backgroundColor: "#FFFFFF", padding: "20px", flexDirection: "column"}} maxWidth = {false} id="doodles">
      <ThemeProvider theme = {TypographyTheme}>
        <Typography variant="h3" color={Colors.darkGrey}> doodles </Typography>
        <Typography variant="h4" color={Colors.darkGrey}> mediums include gel pen, digital (using notability), and acrylic paint.</Typography>
      </ThemeProvider>
      <ImageList
        sx={{ paddingLeft: "12%", paddingRight: "12%"}}
        variant="quilted"
        cols={defaultCol ? 7 : 1}
        >
        {itemData.map((item, index) => (
            <StyledImageListItem key={item.img} cols={defaultCol ? item.cols : 1} rows={defaultRow ? item.rows : 1} >
            <GridLoader
                    size={15}
                    loading={isLoading[index]}
                />
            {isLoading[index] ? null : (
                    <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    onLoad={() => setIsLoading(prev => {
                        prev[index] = false;
                        return prev;
                    })}
                />
                )}
            </StyledImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

const itemData = [
    // first row
    {
      img: 'walter.jpg',
      title: 'Walter White',
      rows: 2,
      cols: 4,
    },
    {
        img: 'walter_green.jpg',
        title: 'Walter White - Green',
        rows: 2,
        cols: 3
    },
    // second row
    {
        img: 'moby_dick.png',
        title: 'fish1',
        cols: 2,
        rows: 2
    },  
    {
        img: 'angel_man.jpeg',
        title: 'Max',
        cols: 3,
        rows: 2
    },
    {
        img: 'moby_dick_white.png',
        title: 'Max',
        cols: 2,
        rows: 1
    },
    {
        img: 'moby_dick_green.png',
        title: 'Max',
        cols: 2,
        rows: 1
    },
    // third row
    {
        img: 'bernie.jpeg',
        title: 'Bernie Sanders With Mittens',
        cols: 2,
        rows: 2
    },
    {
        img: 'fisheye.jpg',
        title: '5 Point Perspective Practice',
        cols: 3,
        rows: 2
    },
    {
        img: 'ribs.jpeg',
        title: 'Ribs',
        cols: 2,
        rows: 2
    },
    {
        img: 'max2.jpg',
        title: 'Max',
        cols: 3,
        rows: 1
    },


    {
        img: 'summer_stupid.jpeg',
        title: 'Max',
        cols: 3,
        rows: 2
    },

  ];
