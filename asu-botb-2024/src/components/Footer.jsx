import React from 'react';
import { Typography, Box, Container, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 3, px: 2, mt: 'auto', backgroundColor:'#002da1' }}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          2024 Battle Of The Brains, All Rights Reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;