// src/components/MultiActionAreaCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function MultiActionAreaCard() {

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 20, 
        padding: 2, 
      }}>
        {/* First Card */}
        <Card sx={{ width: '20%', maxWidth: 'none' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image="https://i.pinimg.com/564x/8b/74/83/8b74830a674053b51be5696fe2b83fac.jpg" 
              alt="First Image Alt Text"
            />
            <CardContent>
              {/* Content */}
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: 'center' }}>
          <Link href="https://www.youtube.com/watch?v=zp7_DdBo_8o" underline="none">
            <Button size="small" color="primary">
              NFL GO
            </Button>
            </Link>
          </CardActions>
        </Card>
  
        {/* Second Card */}
        <Card sx={{ width: '20%'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image="https://blogs.mercurynews.com/collegesports/files/2016/02/NFL-logo.jpg" 
              alt="Second Image Alt Text"
            />
            <CardContent>
              {/* Content */}
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button size="small" color="primary" >
              NFL FANTASY
            </Button>
          </CardActions>
        </Card>
      </Box>
  );
}
