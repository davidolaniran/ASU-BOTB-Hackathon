import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import useStyles from './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HorizontalScroll from './components/Horizontalscroll';
import ThreeScene from './components/ThreeScene';
import Nflcard from './components/Nflcard';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import VideoPlayer from './components/VideoPlayer';




const theme = createTheme();

function App() {
  const classes = useStyles();

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className= {classes.appContainer}>
      <Navbar />
      <main className={classes.mainContent}>
      <div className="App">
      <h1>Horizontal Scroll Example</h1>
      <HorizontalScroll>
        {/* Your content goes here */}
        <div className="item">
          Item 1
          <img src="" alt="" />
        </div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        {/* Add more items as needed */}
      </HorizontalScroll>
    </div>
        
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh'
      }}
    >
      <Box
        component="img"
        sx={{
          height: 80,
          transform: 'scale(2.0)', 
          transformOrigin: 'center' 
        }}
        src="https://res.cloudinary.com/dqjoolzkn/image/upload/v1709885978/reke5dxskgjumnq6ib8h.png"
        alt="NFLGO"
      />
    </Box>
    <div >
      <Nflcard />
    </div>
    <div>

      <VideoPlayer />
    </div>
      </main>
      <Footer />
      </div>
      
    </ThemeProvider>
  );
}

export default App;