import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import d from '../../Login Page/images/d.svg'
import Box from '@mui/material/Box';
import css from './leftbar.module.css'
import { useState } from 'react';
import Special from './specialities';
import PersonIcon from '@mui/icons-material/Person';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function Left() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>
        <div className={css.nav}>
        <Box
      sx={{ flexGrow: 1, display: 'flex', marginTop: '7rem', position:'fixed'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label= "Doctors" icon={<span className="material-icons"><PersonIcon /></span>} {...a11yProps(0)} /> 
        <Tab label="Specialities" icon={<span className="material-icons"><BubbleChartIcon /></span>} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className={css.imge}>
        <img 
        width={2000}
        src = {d}
         />
         <Special />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
         <Special />
        </div>
      </TabPanel>
    </Box>
        </div>
    </div>
  )
}

export default Left