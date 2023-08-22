import React from 'react'
import a from '../Login Page/images/a.svg'
import css from './header.module.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Drawe from '../drawer/drawer'


export default function Header () {
    const top100Films = [
        { label: "Bone Marrow" },
        { label: "Anethesiology" },
       { label: "E.N.T" },
        { label: "Cardiac Surgery" },
       { label: "Clinical Nutrition & Dietetics" },
        { label: "Cosmetology" },
       { label: "Breast & Oncoplastic - Oncology" },
       {
        label: "Child & Adolescent Psychiatry",
        },
   ];
  return (
    <div>
        <div className={css.up}>
        <div className={css.upp}>
        <Drawe />
        <Link to="/">
            <img 
            src = {a}
            alt='mylogo'
            width={500}
            height={150}
            />
            </Link>
            <Link to="/login">
            <button href="/login">LOGIN</button>
            </Link>
            </div>
        <div className={css.bet}>
                <Autocomplete
                 disablePortal
                 id="combo-box-demo"
                 options={top100Films}
                 forcePopupIcon={false}
                 renderInput={(params) => (
                 <TextField {...params} 
                 sx={{
     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: "none",
            }
                 }}
                  placeholder="Select a Service"  style={{ width: '30vh', height: '5vh', backgroundColor: 'rgb(250, 248, 248)', border:'none' }} />
                 )}
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
        <div className={css.down}>
        <h1>I am here</h1>
        </div>
    </div>
  )
}
