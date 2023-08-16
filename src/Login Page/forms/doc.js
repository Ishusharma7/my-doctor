import React from 'react'
import css from './register.module.css'
import { useState } from 'react';
import { TextField } from '@mui/material';

export default function Doc(props) {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    <form>
        <div className={css.up}>
            <h1>Create an account</h1>
            <label>
            Full Name*
            <TextField 
                placeholder='Enter name'
                required
            />
            </label>
        </div>
        <div className={css.mid}>
            <h2>Gender*</h2>
            <label>
        <input
          type="radio"
          value="Male"
          className={css.radio}
          checked={selectedOption === 'Male'}
          onChange={handleOptionChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="Female"
          className={css.radio}
          checked={selectedOption === 'Female'}
          onChange={handleOptionChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          value="Other"
          className={css.radio}
          checked={selectedOption === 'Other'}
          onChange={handleOptionChange}
        />
        Other
      </label>
        </div>
        <div className={css.down}>
        <label>
          Mobile Number*
            <TextField
            placeholder='Enter Mobile Number'
             />
             </label>
             <label>
             Email*
             <TextField
            placeholder='abc@gmail.com'
             />
             </label>
             <label>
             Create Password*
             <TextField
            placeholder='Create Password'
             />
             </label>
             <label>
             Confirm Password*
             <TextField
            placeholder='Confirm Password'
             />
             </label>
        </div>
        <div className={css.last}>
        <button>Register</button>
        <div className={css.but}>
        <h4>Already have an accout? <button onClick={props.handleSigin}>Sign in</button></h4>
        </div>
        </div>
    </form>
  )
}
