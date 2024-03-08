import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import useStyles from './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HorizontalScroll from './components/Horizontalscroll';

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
        
      </main>
      <Footer />
      </div>
      
    </ThemeProvider>
  );
}

export default App;