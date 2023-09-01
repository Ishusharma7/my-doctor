import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import css from './leftbar.module.css'
import Special from './specialities';
import PersonIcon from '@mui/icons-material/Person';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Doc from './doctcard';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";



function Left() {

  
  return (
    <div>
        <div className={css.nav}>
        <Box sx={{ display: {md:'flex',xs:'none'} }}>
      <Drawer
        variant="permanent"
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: '18vw',
            boxSizing: 'border-box',
            mt:'10em',
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Doctors', 'Specialities'].map((text, index) => (
              <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={text === 'Doctors' ? '/' : '/specialities'}>
          <ListItemIcon>
            {index % 2 === 0 ? <PersonIcon style={{ fontSize: '50px', paddingLeft: '1em' }} /> : <BubbleChartIcon style={{ fontSize: '50px', paddingLeft: '1em' }} />}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="h6" style={{ fontSize: '30px', padding: '1em' }}>
                {text}
              </Typography>
            }
          />
        </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:'#fafafa' }}>
        <Toolbar sx={{backgroundColor:'#fafafa'}}/>
      </Box>
    </Box>
        </div>
    </div>
  )
}

export default Left;