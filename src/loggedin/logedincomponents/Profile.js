import React from 'react'
import Left from '../../Home Page/Cards/leftbar'
import { Avatar, TextField } from '@mui/material'
import css from './profile.module.css'
import { useState, useEffect } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'


function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState('EDIT');
    const [selectedImage, setSelectedImage] = useState(null);
    
    const user = JSON.parse(localStorage.getItem("userContext"));
    console.log(user)
    const initialName = user.user.firstName +' '+ user.user.lastName;
    const [names, setNames] = useState(initialName)

    const toggleEditing =() => {
      setIsEditing(!isEditing);
      setData(!isEditing?'SAVE':'EDIT');   
    };


    async function getPatientImage() {
      const queryParams = new URLSearchParams({
          avatar: 1,
          "$select[]": "avatarId",
      });
      let response = await fetch(
          `http://my-doctors.net:8090/patients/${user.user._id
          }?${queryParams.toString()}`,
          {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${user.accessToken}`,
              },

          });
      response = await response.json();
      setSelectedImage(response?.avatar?.buffer);
  }
  useEffect(()=>{
      getPatientImage();
  },[])



    const textFieldPadding = {
        '& .MuiInputBase-input': {
          padding: '2rem', // Adjust the padding as needed
          fontSize:'2rem',
        },
      };
      const handleChange =(e)=>{
        setNames(e.target.value)
      }
      const handleImageChange = async(e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl); // Set in state
      }
      
      
      useEffect(() => {
        const [firstName, lastName] = names.split(' ');
        const updatedUser = { ...user.user, firstName, lastName };
        localStorage.setItem("userContext", JSON.stringify({ user: updatedUser }));
      }, [names]);
  return (
    <div style={{marginTop:'13rem',marginLeft:'31rem', backgroundColor:'#fafafa', paddingBottom:'5rem'}}>
    <div>
        <Left />
    </div>
    <div className={css.main}>
    <div className={css.avtside}>
        <h1>My Profile</h1>
        {selectedImage ? (
            <img src={selectedImage} alt="Uploaded" style={{ height: '15rem', width: '15rem' }} />
          ) : (
            <Avatar sx={{ height: '15rem', width: '15rem' }} />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} id="fileInput" style={{ display: 'none'}} />
          <div style={{display:'flex', gap:'1rem'}}>
          {isEditing ? (
            <>
          <label htmlFor="fileInput" className={css.uploadButton}>
            <CameraAltIcon  sx={{fontSize:'3rem', color:'blue'}} />
          </label>
            <CloseIcon sx={{fontSize:'3rem'}} disabled /></>):(null)}
            </div>
        <p>JPEG, JPG or PNG image less than 1 MB<br />
(Close up face picture looks great)</p>
    </div>
    <div>
        <button onClick={toggleEditing}>{data}</button>
    </div>
    </div>
    <div className={css.fiel}>
    <TextField
    value={names}
    label='Name'
    onChange={handleChange}
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
            disabled />
    <TextField
    label='Email'
    value={user.user.email}
    focused
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled />
    <TextField
    label='Gender'
    value={user.user.gender}
    
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