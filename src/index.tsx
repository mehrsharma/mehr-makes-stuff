import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Button, Container, Typography } from '@mui/material';

import Title from './pages/title';
import About from './pages/about';
import Doodles from './pages/doodles';
import Contact from './pages/contact';

import { Colors } from './components/styles-and-constants';
import fish from './images/fish.svg';
import background from './images/background.svg';
import backgroundG from './images/background-gray.svg';
// import gradient from './images/hello4.jpg';
import Circles from './components/circles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <div style= {{
      display: "flex",
      justifyContent: "center",
      height: "95vh",
      width: "100%",
      maxWidth: "100%",
      // backgroundImage:`url(${gradient})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative"
    }}>
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
      zIndex: 2,
    }}/>
    {/* <div style= {{
      width:"272px",
      height:"272px",
      borderRadius: "50%",
      backgroundColor: "#4b6043",
      position: "absolute",
      top: "50%",
      left: "calc(50% - 100px)",
      transform: "translate(-50%, -50%)",
      zIndex: 9999
    }} id = "hello3" /> */}
      <Title/>
    </div>
    {/* <Container component="div" sx={{ display: "flex", justifyContent: "center", height: '100vh', backgroundColor: "#4C4E52"}} maxWidth = {false}> */}
      <About/>
    {/* </Container> */}
      <Doodles/>
      <Contact/>
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
