import React from 'react'
import Header from "./Header";
import b from './images/b.svg'
import c from './images/c.svg'
import css from './login.module.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Form from '../form';
import Register from './register';
import Doc from './doc';



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


function Login() {
    const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
        <Header />
        <div>
        <div className={css.nav}>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider'}}>
      <div className={css.fl}>
      <div className={css.empt}></div>
        <div className={css.lab}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="LOGIN" {...a11yProps(0)} />
          <Tab label="PATIENT SIGN UP" {...a11yProps(1)} />
          <Tab label="DOCTOR SIGN UP" {...a11yProps(2)} />
        </Tabs>
          </div>
          </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className={css.imge}>
        <img
            src ={b}
            alt='img here'
            width={1200}
            height={1200}
        />
       <Form />
        </div>
 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className={css.imge}>
        <img
            src ={c}
            alt='img here'
            width={1200}
            height={1200}
        />
        <Register />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className={css.imge}>
        <img
            src ={c}
            alt='img here'
            width={1200}
            height={1200}
        />
        <Doc />
        </div>
      </CustomTabPanel>
    </Box>
        </div>
        </div>
    </>
  )
}

export default Login;