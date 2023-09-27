import React from 'react'
import { useState, useEffect } from 'react';
import a from '../Login Page/images/a.svg'
import css from './header.module.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Drawe from '../drawer/drawer'
import { useNavigate } from 'react-router-dom';
import Swiperr from './swiper';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar, Typography } from '@mui/material';


export default function Header () {
    const [specialData, setSpecialData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const[selectedImage, setSelectedImage] = useState(null);

    const navigate = useNavigate();


    const user = JSON.parse(localStorage.getItem("userContext"));
    
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = ()=>{
    setAnchorEl(null);
    localStorage.removeItem("userContext");
    navigate('/')
    window.location.reload()
  }

  const handleAppointment = ()=>{
    setAnchorEl(null);
    navigate('/appointments')
  }

  const handleAccount = ()=>{
    setAnchorEl(null);
    navigate('/myprofile')
  }
    const getSpecializationData = async () => {
        try {
          const response = await fetch(
            "http://my-doctors.net:8090/specializations?$limit=100"
          );
          let data = await response.json();
          let returnedData = data.data;
          let totalSpecializations = data.total;
          const details = [];
          for (let elem in returnedData) {
            details.push({
              name: returnedData[elem]["name"],
              image: returnedData[elem]["imageUrl"],
              totalSpecializations: Math.floor(totalSpecializations / 10),
            });
          }
          setSpecialData(details);
        } catch (error) {
          // Handle error
        }
      };
    
      useEffect(() => {
        getSpecializationData();
      }, []);


      const customGetOptionLabel = (selectedOption) => {
        return (
          <span style={{ fontSize: '2rem'}}>{selectedOption}</span>
        );
      };

const handleSpDetail = () => {
    if (selectedOption) {
      navigate(`search?q=&sp=${selectedOption}`);
    }
  };

    const top100Films = 
       specialData.map((item) => item.name);

       async function getPatientImage() {
        if (user && user.user) { // Check if 'user' and 'user.user' exist
          const queryParams = new URLSearchParams({
            avatar: 1,
            '$select[]': 'avatarId',
          });
          let response = await fetch(
            `http://my-doctors.net:8090/patients/${user.user._id}?${queryParams.toString()}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          );
          response = await response.json();
          console.log('got image', response);
          setSelectedImage(response?.avatar?.buffer);
        }
      }
    
      useEffect(() => {
        getPatientImage();
      }, [user]); // Make sure to trigger the effect when 'user' changes


  return (
    <div>
        <div className={css.up}>
        <div className={css.upp}>
        <div className={css.hidden}>
        <Drawe />
        </div>
        <Link to="/">
            <img 
            src = {a}
            alt='mylogo'
            width={250}
            height={100}
            />
            </Link>
            {user && (
              <div className={css.lu}>
                <IconButton
                  size="large"
                  onClick={handleMenu}
                >
                 <Avatar 
                 color="disabled"
                      sx={{width:'5rem', height:'5rem', objectFit:'cover'}}
                      src={selectedImage || "/broken-image.jpg"}
                    />
                </IconButton>
                <Menu
                sx={{zIndex:1300000}}
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleAccount} selected><PermIdentityIcon sx={{fontSize:'3rem'}}/><Typography sx={{fontSize:'2rem'}}>Account Settings</Typography></MenuItem>
                  <MenuItem onClick={handleAppointment}><CalendarTodayIcon sx={{fontSize:'3rem'}}/><Typography sx={{fontSize:'2rem'}}>My Appointments</Typography></MenuItem>
                  <MenuItem onClick={handleLogOut}><ExitToAppIcon sx={{fontSize:'3rem'}}/><Typography sx={{fontSize:'2rem'}}>Logout</Typography></MenuItem>
                </Menu>
              </div>
            )}
            {!user && (
              <Link to="/auth/login">
                <button className={css.bt} variant="contained">
                  Log In
                </button>
              </Link>
            )}
            </div>
        <div className={css.bet}>
                <Autocomplete
                 disablePortal
                 disableClearable
                 id="combo-box-demo"
                 options={top100Films}
                 forcePopupIcon={false}
                 onChange={(event, value) => {
              setSelectedOption(value);
            }}
                 getOptionLabel={(selectedOption) => customGetOptionLabel(selectedOption)}
                 renderInput={(params) => (
                 <TextField {...params} 
                 sx={{
     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: "none",
            }
                 }}

                  placeholder="Select a Service"  style={{ width: '30vh', height: '5vh', backgroundColor: 'rgb(250, 248, 248)', border:'none' }} />
                 )}
                 onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSpDetail();
              }
            }}
              />
            <input 
                placeholder='Search a Doctor'
                
            />
            </div>
            <div className={css.u}>
            {user && (
              <div className={css.lu}>
                <IconButton
                  size="large"
                  onClick={handleMenu}
                >
                 <Avatar 
                 color="disabled"
                      sx={{width:'5rem', height:'5rem'}}
                      src={selectedImage || "/broken-image.jpg"}
                    />
                </IconButton>
                <Menu
                sx={{zIndex:1300000}}
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleAccount} selected><PermIdentityIcon sx={{fontSize:'3rem'}}/><Typography sx={{fontSize:'2rem'}}>Account Settings</Typography></MenuItem>
                  <MenuItem onClick={handleAppointment}><CalendarTodayIcon sx={{fontSize:'3rem'}}/><Typography sx={{fontSize:'2rem'}}>My Appointments</Typography></MenuItem>
                  <MenuItem onClick={handleLogOut}><ExitToAppIcon sx={{fontSize:'3rem'}}/><Typography sx={{fontSize:'2rem'}}>Logout</Typography></MenuItem>
                </Menu>
              </div>
            )}
            {!user && (
              <Link to="/auth/login">
                <button className={css.bt} variant="contained">
                  Log In
                </button>
              </Link>
            )}
            </div>
        </div>
        <Swiperr />
    </div>
  )
}
