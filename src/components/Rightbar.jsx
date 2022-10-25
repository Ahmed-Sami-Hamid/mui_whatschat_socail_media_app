import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Conversations from './Conversations'


export default function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100} sx={{ marginBottom:"10px"}}>Online friends</Typography>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1583552317328019456/JgfjneFc_400x400.png" />
          <Avatar alt="Travis Howard" src="https://louisem.com/wp-content/uploads/2017/10/scary-mask-profile-picture.jpg" />
          <Avatar alt="Agnes Walker" src="https://pbs.twimg.com/profile_images/1278444023800377344/e6vkxnre_400x400.jpg" />
          <Avatar alt="Trevor Henderson" src="https://pbs.twimg.com/profile_images/1530069646044454912/oVQvEVO5_400x400.jpg" />
        </AvatarGroup>


        <Typography variant='h6' fontWeight={100} sx={{marginTop:"30px" , marginBottom:"10px"}}>Latest Photos</Typography>
        <ImageList sx={{ width: 500, height: 166 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>


        <Typography variant='h6' fontWeight={100} sx={{marginTop:"30px"}}>Latest Conversation</Typography>
        <Conversations />


      </Box>
    </Box>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //   title: 'Coffee',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  // },
];