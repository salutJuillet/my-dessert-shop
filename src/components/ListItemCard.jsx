import React from 'react';
import './listitemcard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

export default function ImgMediaCard() {
  
  let innerWidth = window.innerWidth;
  let maxWidth;

  if(innerWidth < 768) {
    maxWidth = (innerWidth * 0.5) - 5;
  } else {
    maxWidth = 285;
  }

  return (
    <Card sx={{ maxWidth: maxWidth, height:550 }} className='card_wrapper'>
      <CardMedia
        component="img"
        alt="item1"
        width="100%"
        image="images/menu/cupcake_RedVelvet.png"
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          레드벨벳 컵케익
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}