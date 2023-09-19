import React from 'react'
import Left from '../../Home Page/Cards/leftbar'
import { Avatar, TextField } from '@mui/material'
import css from './profile.module.css'
import { useState, useEffect } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';
import {  MenuItem, Select } from '@mui/material';



function Profile() {
    const [isEditable, setIsEditable] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const user = JSON.parse(localStorage.getItem("userContext"));
    console.log(user)
    const initialName = user.user.firstName +' '+ user.user.lastName;

    const [names, setNames] = useState(initialName);
    const [contactNumber, setContactNumber] = useState(user.user.contactNumber);
    const [email, setEmail] = useState(user.user.email);
    const [gender, setGender] = useState(user.user.gender);
    const [bloodgroup, setBloodgroup] = useState('');
    const [house, setHouse] = useState('');
    const [colony, setColony] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };



    const handleBloodgroupChange = (event) => {
      setBloodgroup(event.target.value);
  };

  function handleName(e) {
      setNames(e.target.value);
  }

  function handlePhone(e) {
      setContactNumber(e.target.value);
  }

  function handleEmail(e) {
      setEmail(e.target.value);
  }

  function handleHouse(e) {
      setHouse(e.target.value);
  }

  function handleColony(e) {
      setColony(e.target.value);
  }

  function handleCity(e) {
      setCity(e.target.value);
  }

  function handleState(e) {
      setState(e.target.value);
  }

  function handleCountry(e) {
      setCountry(e.target.value);
  }

  function handlePincode(e) {
      setPincode(e.target.value);
  }
    const toggleEditing =() => {
      setIsEditable(!isEditable);  
    };

    
const[img,setImg] = useState(null)
    const handleImageChange = async(e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Set in state
      setImg(file);
    }



    
  async function uploadPatientImage() {
    try {
        console.log("uploading image...", img)
        let response = await fetch(
            `http://my-doctors.net:8090/patients/${user.user._id}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
                body: img,
            }
        );
        response = await response.json();
        console.log("upload status",response)
        return response;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

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
      console.log('got image', response)
      setSelectedImage(response?.avatar?.buffer);
  }


  useEffect(() => {
      getPatientImage();
  }, [])



    const textFieldPadding = {
        '& .MuiInputBase-input': {
          padding: '2rem', // Adjust the padding as needed
          fontSize:'2rem',
        },
      };
   
      
      
      // useEffect(() => {
      //   const [firstName, lastName] = names.split(' ');
      //   const updatedUser = { ...user.user, firstName, lastName };
      //   localStorage.setItem("userContext", JSON.stringify({ user: updatedUser }));
      // }, [names]);

      const handleSave = async () => {
        uploadPatientImage()
        try {
          const response = await fetch(
            `http://my-doctors.net:8090/patients/${user.user._id}`,
            {
              method: "PATCH",
              body: JSON.stringify(),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          );
          const data = await response.json();
          console.log(data);
          setIsEditable(false);
          // setDetails(initialState);
        } catch (error) {
          console.log(error);
        }
      };      

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
          {isEditable ? (
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
    {isEditable ? (
                <button
                  variant="contained"
                  sx={{ mt: "5px" ,backgroundColor:'rgb(63, 81, 181)'}}
                  onClick={handleSave}
                  // disabled={!formValidity}
                >
                  Save
                </button>
              ) : (
                <button
                  variant="contained"
                  sx={{ mt: "5px", backgroundColor:'rgb(63, 81, 181)' }}
                  onClick={toggleEditing}
                >
                  Edit
                </button>
              )}
    </div>
    </div>
    <div className={css.fiel}>
    <TextField
    value={names}
    onChange={handleName}
    label='Name'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
        disabled={!isEditable} />
    <TextField
    label='Phone Number'
    onChange={handlePhone}
    value={contactNumber}
    focused
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled />
    <TextField
    label='Email'
    value={email}
    onChange={handleEmail}
    focused
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled />
     <Select
        label="Gender"
        id="gender-select"
        value={gender}
        onChange={handleGenderChange}
        sx={{ ...textFieldPadding,width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable}
      >
        <MenuItem value="male" sx={{fontSize:'1.5rem'}}>Male</MenuItem>
        <MenuItem value="female" sx={{fontSize:'1.5rem'}}>Female</MenuItem>
        <MenuItem value="other" sx={{fontSize:'1.5rem'}}>Other</MenuItem>
      </Select>
    <TextField
    label='Date of Birth'
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable} />
    <TextField
    label='BloodGroup'
    value={bloodgroup}
    onChange={handleBloodgroupChange}
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable} />
    <TextField
    label='House No./Street/Area'
    value={house}
    onChange={handleHouse}
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable} />
    <TextField
    label='Colony/Street/ Locality'
    value={colony}
    onChange={handleColony}
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable} />
    <TextField
    label='City'
    value={city}
    onChange={handleCity}
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable}
     />
    <TextField
    label='State'
    value={state}
    onChange={handleState}
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable} />
    <TextField
    label='Country'
    value={country}
    onChange={handleCountry}
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable} />
    <TextField
    label='Pincode'
    value={pincode}
    onChange={handlePincode}
    sx={{ ...textFieldPadding, width: '23vw', "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             border: '1px solid grey',
            }}}
            disabled={!isEditable} />
    </div>
    </div>
  )
}

export default Profile