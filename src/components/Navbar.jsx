import React , {useState} from 'react'
import { Box , borderRadius } from '@mui/system';
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ForumIcon from '@mui/icons-material/Forum';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyleToolBar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
});
const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:"5px",
  width:"40%",
}));
const Icon = styled(Box)(({theme})=>({
display:"flex",
gap:"20px",
alignItems:"center",
cursor:"pointer",
}));
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  }));

export default function Navbar() {
  const [open , setOpen] = useState();
  return (
    <AppBar position='fixed'>
      <StyleToolBar>
        <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>WhatsChat</Typography>
        <ForumIcon sx={{display:{xs:'block',sm:'none'}}}/>
        <Search><InputBase placeholder='Search...' /></Search>
        <Icon sx={{display:{xs:'none',sm:'flex'}}}>
        <Badge badgeContent={4} color="error">
          <MailIcon color="white" />
        </Badge>
        <Badge badgeContent={2} color="error">
          <NotificationsIcon />
        </Badge>
        <Avatar onClick={e=>setOpen(true)} sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
        </Icon>
        <UserBox  sx={{display:{xs:'flex',sm:'none'}}}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
        <Typography variant='span'>Sami</Typography>
        </UserBox>
      </StyleToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e=>setOpen(false)}
        open={open}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
