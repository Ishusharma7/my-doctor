import React from 'react'
import Left from '../../Home Page/Cards/leftbar'
import { Button, TextField } from '@mui/material'
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';import CloseIcon from '@mui/icons-material/Close';
import css from './pass.module.css'

function ChPassword() {

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
      });
      
      const [inputErrors, setInputErrors] = useState({
        password: "",
        confirmPassword: "",
      });

    const [passwordChecks, setPasswordChecks] = useState({
        lowercase: "",
        uppercase: "",
        specialChar: "",
        number: "",
        passwordLength: "",
        match: "",
      });
      const textFieldPadding = {
        '& .MuiInputBase-input': {
          padding: '1.5rem', // Adjust the padding as needed
        },
      };

      const validateInput = (e) => {
        let { name, value } = e.target;
    
        setInputErrors((prev) => {
          const stateObj = { ...prev, [name]: "" };
    
          switch (name) {    
            case "password":
              if (!value) {
                stateObj[name] = "Password cannot be empty!";
              } else {
                validatePassword(value);
                stateObj[name] = "";
              }
              break;
    
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (formData.password && value === formData.password) {
                setPasswordChecks((prev) => {
                  return { ...prev, match: "checked" };
                });
                stateObj[name] = "";
              } else {
                setPasswordChecks((prev) => {
                  return { ...prev, match: "unchecked" };
                });
                stateObj[name] = "";
              }
              break;
    
            default:
              break;
          }
    
          return stateObj;
        });
      };

      const validatePassword = (value) => {
        setPasswordChecks((prev) => {
          const passwordObj = { ...prev };
          // Check lowercase letter
          if (!/[a-z]/.test(value)) {
            passwordObj.lowercase = "unchecked";
          } else {
            passwordObj.lowercase = "checked";
          }
          // Check uppercase letter
          if (!/[A-Z]/.test(value)) {
            passwordObj.uppercase = "unchecked";
          } else {
            passwordObj.uppercase = "checked";
          }
          // Check special character
          if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value)) {
            passwordObj.specialChar = "unchecked";
          } else {
            passwordObj.specialChar = "checked";
          }
    
          // Check number
          if (!/[0-9]/.test(value)) {
            passwordObj.number = "unchecked";
          } else {
            passwordObj.number = "checked";
          }
          // Check length
          if (value.length < 6) {
            passwordObj.passwordLength = "unchecked";
          } else {
            passwordObj.passwordLength = "checked";
          }
    
          // Check password match
          if (formData.password !== formData.confirmPassword) {
            passwordObj.match = "unchecked";
          } else {
            passwordObj.match = "checked";
          }
          return passwordObj;
        });
      };
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    
    
        if (name === "password" || name === "confirmPassword") {
          if (!value) {
            setInputErrors((prev) => ({
              ...prev,
              [name]: "Password cannot be empty!",
            }));
          } else {
            validateInput(event);
          }
        }
      };
      const isSubmitDisabled = () => {
        return (
          Object.values(formData).some((value) => !value) ||
          Object.values(inputErrors).some((error) => error !== '') ||
          Object.values(passwordChecks).some((check) => check === 'unchecked')
        );
      };
  return (
    <div style={{marginTop:'13rem',marginLeft:'31rem', backgroundColor:'#fafafa', padding:'3rem'}}>
        <Left />
        <div className={css.alll}>
            <h1>Change Password</h1>
            <TextField 
                label='Current Password*'
                onChange={handleInputChange}
                sx={{ ...textFieldPadding, maxWidth:'25vw', '& label': { fontSize: '1.5rem' }}}
            />
            <TextField 
                label='New Password'
                type="password"
                name="password"
                onChange={handleInputChange}
                value={formData.password}
                onBlur={validateInput}
                sx={{ ...textFieldPadding, maxWidth:'25vw', '& label': { fontSize: '1.5rem' }}}
            />
            <TextField 
                label='Confirm Password'
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onBlur={validateInput}
                sx={{ ...textFieldPadding, maxWidth:'25vw', '& label': { fontSize: '1.5rem' }}}
            />

            <p className={css.icon}>
               { passwordChecks.lowercase === "checked" ? (
                <DoneIcon color="success" sx={{fontSize:'2rem'}} />
              ) : (
                <CloseIcon color="error" sx={{fontSize:'2rem'}} />
              )}
              Must contain lowercase letter.
            </p>

            <p className={css.icon}>
              {passwordChecks.uppercase === "checked" ? (
                <DoneIcon color="success" sx={{fontSize:'2rem'}} />
              ) : (
                <CloseIcon color="error" sx={{fontSize:'2rem'}} />
              )}
              Must contain uppercase letter.
            </p>

            <p className={css.icon}>
              {passwordChecks.specialChar === "checked" ? (
                <DoneIcon color="success" sx={{fontSize:'2rem'}} />
              ) : (
                <CloseIcon color="error" sx={{fontSize:'2rem'}} />
              )}
              Mustcontain at least one special character.
            </p>

            <p className={css.icon}>
              {passwordChecks.number === "checked" ? (
                <DoneIcon color="success" sx={{fontSize:'2rem'}} />
              ) : (
                <CloseIcon color="error" sx={{fontSize:'2rem'}} />
              )}
              Must contain at least one number.
            </p>

            <p className={css.icon}>
              {passwordChecks.passwordLength === "checked" ? (
                <DoneIcon color="success" sx={{fontSize:'2rem'}} />
              ) : (
                <CloseIcon color="error" sx={{fontSize:'2rem'}} />
              )}
              Must contain at least 6 characters.
            </p>

            <p className={css.icon}>
              {passwordChecks.match === "checked" ? (
                <DoneIcon color="success" sx={{fontSize:'2rem'}} />
              ) : (
                <CloseIcon color="error" sx={{fontSize:'2rem'}} />
              )}
              Passwords must match.
            </p>
                <Button  disabled={isSubmitDisabled()} >SUBMIT</Button>
        </div>
    </div>
  )
}

export default ChPassword