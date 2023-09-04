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


export default function Header () {
    const [specialData, setSpecialData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const navigate = useNavigate();

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


  

const handleSpDetail = () => {
    if (selectedOption) {
      navigate(`search?q=&sp=${selectedOption}`);
    }
  };

    const top100Films = 
       specialData.map((item) => item.name);
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
            <Link to="/login">
            <button href="/login">LOGIN</button>
            </Link>
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
            <Link to="/login">
            <button  href="/login">LOGIN</button>
            </Link>
            </div>
        </div>
        <Swiperr />
    </div>
  )
}
