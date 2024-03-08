import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import useStyles from './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const theme = createTheme();

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className= {classes.appContainer}>
      <Navbar />
      <main className={classes.mainContent}>

        
      </main>
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;