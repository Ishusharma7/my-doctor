import React from 'react'
import css from './register.module.css'
import { useState } from 'react';

export default function Doc() {
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
            <input 
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
            <input
            placeholder='Enter Mobile Number'
             />
             </label>
             <label>
             Email*
             <input
            placeholder='abc@gmail.com'
             />
             </label>
             <label>
             Create Password*
             <input
            placeholder='Create Password'
             />
             </label>
             <label>
             Confirm Password*
             <input
            placeholder='Confirm Password'
             />
             </label>
        </div>
        <div className={css.last}>
        <button>Register</button>
        <h4>Already have an account? Sign in</h4>
        </div>
    </form>
  )
}
