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


function Left() {
  const [hasAppointment, setHasAppointment] = useState(false);

  // Check if there is content stored in local storage when the component mounts
  useEffect(() => {
    const storedAppointment = localStorage.getItem('userContext');
    setHasAppointment(!!storedAppointment); // Set to true if there is content in local storage
  }, []);
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
                {['Doctors', 'Specialities', 'My Appointments', 'Account Settings'].map((text, index) => (
                  // Conditionally render the "Appointment" drawer based on the hasAppointment state
                  hasAppointment || (text !== 'My Appointments' && text !== 'Account Settings')? (
                    <ListItem key={text} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={text === 'Doctors' ? '/' : text === 'Specialities' ? '/specialities' :text === 'My Appointments' ? '/appointments':'/myprofile'}
                         >
                        <ListItemIcon>
                          { text === 'Specialities' ?(
                            <BubbleChartIcon style={{ fontSize: '50px' }} />
                          ): text === 'My Appointments' ?(
                            <CalendarTodayIcon style={{ fontSize: '50px' }} />
                          ):(
                            <PersonIcon style={{ fontSize: '50px' }} />
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
