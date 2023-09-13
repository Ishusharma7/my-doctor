import React from 'react'
import Left from '../../Home Page/Cards/leftbar'
import { Avatar, TextField } from '@mui/material'
import css from './profile.module.css'
import { useState } from 'react'

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState('EDIT');
    
    const user = JSON.parse(localStorage.getItem("userContext"));
    console.log(user)
    const name = user.user.firstName + user.user.lastName;
    const toggleEditing = () => {
      setIsEditing(!isEditing);
      setData(!isEditing?'SAVE':'EDIT')
    };
    const textFieldPadding = {
        '& .MuiInputBase-input': {
          padding: '2rem', // Adjust the padding as needed
          fontSize:'2rem',
        },
      };
  return (
    <div style={{marginTop:'13rem',marginLeft:'31rem', backgroundColor:'#fafafa', paddingBottom:'5rem'}}>
    <div>
        <Left />
    </div>
    <div className={css.main}>
    <div className={css.avtside}>
        <h1>My Profile</h1>
        <Avatar sx={{height:'15rem', width:'15rem'}}/>
        <p>JPEG, JPG or PNG image less than 1 MB<br />
(Close up face picture looks great)</p>
    </div>
    <div>
        <button onClick={toggleEditing}>{data}</button>
    </div>
    </div>
    <div className={css.fiel}>
    <TextField
    value={name}
    focused
    label='Name'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
        disabled={!isEditing} />
    <TextField
    label='Phone Number'
    value={user.user.contactNumber}
    focused
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='Email'
    value={user.user.email}
    focused
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='Gender'
    value={user.user.gender}
    focused
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='Date of Birth'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='BloodGroup'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='House No./Street/Area'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='Colony/Street/ Locality'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='City'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing}
     />
    <TextField
    label='State'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='Country'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    <TextField
    label='Pincode'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditing} />
    </div>
    </div>
  )
}

export default Profile