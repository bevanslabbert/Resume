import React, { useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

// Pages
import Home from './pages/Home'
import Enquire from './pages/Enquire';

// Define a custom theme to use breakpoints
const theme = createTheme();

const accordionSx = {
  backgroundColor: 'var(--tertiary-color)',
  color: 'var(--background-color)',
  paddingBottom: '1rem',
  paddingTop: '1rem',
  boxShadow: "none",
  borderBottom: "none",
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateX(30px)',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
  // Mobile styling using breakpoints
  [theme.breakpoints.down('sm')]: {
    '&:hover': {
      transform: 'translateX(0px)',
    }
  },
};

function App() {

  return (
    <div className="App">
      <Analytics/>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Home accordionSx={accordionSx}/>} />
              <Route path="contact-me" element={<Enquire />} />
              {/* <Route path="nutrition/enquire" element={<Enquire />} />
              <Route path="coaching/enquire" element={<Enquire />} />
              <Route path="coaching-and-nutrition/enquire" element={<Enquire />} /> */}
              {/* <SpeedInsights /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
