import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import useStyles from './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ThreeScene from './components/ThreeScene'; // Assuming ThreeScene is another component you have set up

const theme = createTheme();

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className= {classes.appContainer}>
      <Navbar />
      <main className={classes.mainContent}>
        {/* Place for your main app content, which might include a Three.js scene or other elements */}
        
        {/* You can replace <ThreeScene /> with other components or content as needed */}
      </main>
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;