import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

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
  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          {['Doctors','Specialitist'].map((text, index) => (
            <ListItem  key={text}>
              <ListItemIcon></ListItemIcon>
              {text === 'Doctors' && <Link to="/">Doctors</Link>}
              {text === 'Specialities' && <Link to="/specialities">Specialities</Link>}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default Drawe;