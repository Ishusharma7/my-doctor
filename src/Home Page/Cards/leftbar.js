import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import css from './leftbar.module.css';
import PersonIcon from '@mui/icons-material/Person';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NestedDrawer from '../../loggedin/nesteddrawaer'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


function Left() {
  const [hasAppointment, setHasAppointment] = useState(false);
  const [display, setDisplay] = useState("none")

  const user = JSON.parse(localStorage.getItem("userContext"));

  const arr = ['Doctors', 'Specialities', 'My Appointments', 'Account Settings']
  const arr2 = ["Dashboard", 'Doctor Profile', 'Appointments', 'Reviews']

  let menuOptions;

  if (user && user.user && user.user.role === 'doctor') {
    menuOptions = arr2;
  } else {
    menuOptions = arr;
  }
  // Check if there is content stored in local storage when the component mounts
  useEffect(() => {
    const storedAppointment = localStorage.getItem('userContext');
    setHasAppointment(!!storedAppointment); // Set to true if there is content in local storage
  }, []);

  const handleAccountSettingsClick =() =>{
    setDisplay("block");
  }


  return (
    <div>
      <div className={css.nav}>
        <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
          <Drawer
            variant="permanent"
            sx={{
              [`& .MuiDrawer-paper`]: {
                width: '18vw',
                boxSizing: 'border-box',
                mt: '10em',
              },
            }}
          >
            <Box sx={{ overflow: 'auto', marginTop: '2vh' }}>
              <List>
                {menuOptions.map((text, index) => (
                  // Conditionally render the "Appointment" drawer based on the hasAppointment state
                  hasAppointment || (text !== 'My Appointments' && text !== 'Account Settings')? (
                    <ListItem key={text} disablePadding>
                      <ListItemButton
                        onClick={text === 'Account Settings' ? handleAccountSettingsClick : undefined}
                        component={Link}
                        to={text === 'Doctors' ? '/' : text === 'Specialities' ? '/specialities' :text === 'My Appointments' ? '/appointments':'/myprofile'}
                         >
                        <ListItemIcon>
                          { text === 'Specialities' ?(
                            <BubbleChartIcon style={{ fontSize: '50px' }} />
                          ): text === 'My Appointments' ?(
                            <CalendarTodayIcon style={{ fontSize: '50px' }} />
                          ):text === 'Doctors'?(
                            <PersonIcon  style={{ fontSize: '50px' }} />
                          ):text === 'Account Settings'?(
                            <PersonIcon  style={{ fontSize: '50px' }} />
                          ):(
                            <PersonOutlineOutlinedIcon style={{ fontSize: '50px' }} />
                          )}
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
                  ) : null
                ))}
              </List>
            </Box>
            <Box display={display}>
      <NestedDrawer />
      </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#fafafa' }}>
            <Toolbar sx={{ backgroundColor: '#fafafa' }} />
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Left;
