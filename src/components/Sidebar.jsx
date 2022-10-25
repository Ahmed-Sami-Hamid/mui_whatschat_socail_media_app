import React from 'react'
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TuneIcon from '@mui/icons-material/Tune';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Switch from '@mui/material/Switch';



const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function Sidebar({mode , setMode}) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Card sx={{ minWidth: "100%" , marginBottom:"20px" }}>
          <CardContent>
            <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="HomePage" />
                  </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                  </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                  </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StorefrontIcon />
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                  </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TuneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <NightlightIcon />
                    </ListItemIcon>
                    <Switch onChange={(e)=>setMode(mode ==="light" ? "dark" : "light")} />
                  </ListItemButton>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>
    </Box>
  )
}
