import React, { useState, useEffect } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import NestedDrawer from '../../loggedin/nesteddrawaer'

function Drawe() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setIsOpen(open);
    };
    const [hasAppointment, setHasAppointment] = useState(false);
    const [display, setDisplay] = useState("none")
  
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
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
        {['Doctors', 'Specialities', 'My Appointments', 'Account Settings'].map((text, index) => (
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
                            <BubbleChartIcon style={{ fontSize: '30' }} />
                          ): text === 'My Appointments' ?(
                            <CalendarTodayIcon style={{ fontSize: '30px' }} />
                          ):(
                            <PersonIcon style={{ fontSize: '30px' }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="h6" style={{ fontSize: '15px', padding: '.5em' }}>
                              {text}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ) : null
                ))}
        </List>
      </Drawer>
    </div>
  )
}

export default Drawe;