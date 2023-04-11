import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAccount } from '../api';

const Profile = () => {
  const [data, setData] = useState()
  useEffect(() => {
    getAccount().then((data) => {
      setData(data.data.payload)
    });
  }, []);
  console.log(data);
  return (
    <Stack direction={'row'} margin={'30px'}>
      <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="440"
        image="https://turbosale.xyz/static/media/customer.b02688fb.svg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Costumer: {data?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {data?.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {data?.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Create At: {data?.createdAt.slice(0, 10)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </Stack>
  )
}

export default Profile