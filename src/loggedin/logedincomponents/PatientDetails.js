import { TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import css from './patientdet.module.css'
import Left from '../../Home Page/Cards/leftbar'

function PatientDetails({handleNext}) {
    const [selectedOption, setSelectedOption] = useState('myself')
    const[data, setData]=useState([])
    const textFieldPadding = {
        '& .MuiInputBase-input': {
          padding: '1rem', // Adjust the padding as needed
          fontSize:'2rem',
        },
      };

      
      const user = JSON.parse(localStorage.getItem("userContext"));
      console.log(user)
      const initialName = user.user.firstName +' '+ user.user.lastName;

      const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
      };


  return (
    <div className={css.al}>
    <Left />
        <h1 >Patient Details</h1>
        <div className={css.chose}>
            <h2>The appointment is for:</h2>
            <label>
            <input
            type='radio'
            name='appointmentFor'
            value='myself'
             checked={selectedOption === 'myself'}
            onChange={handleRadioChange}
             />
             Myself
             </label>
             <label>
            <input
            type='radio'
            name='appointmentFor'
            value='someoneElse'
            checked={selectedOption === 'someoneElse'}
            onChange={handleRadioChange}
             />
            Someone Else
            </label>
            <p>Please provide the following information about the patient:</p>
        <div className={css.fl}>
            <TextField sx={{...textFieldPadding, width:'22vw', paddingLeft:'1rem'}}
                label='Patient Name'
                value={selectedOption === 'myself' ? initialName : ''}
            disabled={selectedOption === 'myself'}
            />
            <TextField sx={{...textFieldPadding, width:'22vw',paddingLeft:'1rem'}}
                label="Patient's Mobile Number"
                value={selectedOption === 'myself' ? user.user.contactNumber : ''}
            disabled={selectedOption === 'myself'}
            />

            <h3>Fee : Rs {data.consultationFee}</h3>
        </div>
        </div>
        <div style={{display:'flex', gap:'2rem'}}>
          <button className={css.bex} disabled>Back</button>
          <button onClick={handleNext} className={css.nex}>Next</button>
        </div>
    </div>
  )
}

export default PatientDetails