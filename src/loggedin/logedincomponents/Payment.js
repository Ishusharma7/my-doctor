import React from 'react'
import css from './payment.module.css'
import Imag from '../../Home Page/Cards/imag'
import { TextField } from '@mui/material'
import { useState } from 'react'

function Payment() {
  const[card,setCard]  = useState('')
  const[expmnth,setExpmnth]  = useState('')
  const[expyear,setExpyear]  = useState('')  
  const[scrty,setScrty]  = useState('')

  
  const handleSecurity = (e) => {
    // Remove any non-numeric characters from the input
    const input = e.target.value.replace(/\D/g, '');

    // Limit the input to a maximum of 4 characters
    const limitedInput = input.slice(0, 4);

    // Update the state with the limited input
    setScrty(limitedInput);
  };
function handleYear(e){
  setExpyear(e.target.value)
}

function handleMonth(e){
  setExpmnth(e.target.value)
}

const handleCard = (e) => {
  // Remove any non-numeric characters from the input
  const input = e.target.value.replace(/\D/g, '');

  // Limit the input to exactly 16 digits
  const limitedInput = input.slice(0, 16);

  // Pad the input with spaces for better readability
  const formattedInput = limitedInput.replace(/(\d{4})(?=\d)/g, '$1-');

  // Update the state with the formatted input
  setCard(formattedInput);
};
  const textFieldPadding = {
    '& .MuiInputBase-input': {
      padding: '1rem', // Adjust the padding as needed
      fontSize:'2rem',
    },
  };
  return (
    <div className={css.al}>
        <h1>Payment Details</h1>
        <div className={css.ai}>
         <p>Accepted Credit/Debit Cards</p>
         <Imag  src={'http://my-doctors.net/assests/icons/cards/visa.svg'} width='100' />
         <div className={css.imaag}>
         <Imag  src={'http://my-doctors.net/assests/icons/cards/maestro.svg'} width='700' />
         <Imag  src={'http://my-doctors.net/assests/icons/cards/western_union.svg'} width='250' />
         <Imag  src={'http://my-doctors.net/assests/icons/cards/unionpay.svg'} width='200' />
         <Imag  src={'http://my-doctors.net/assests/icons/cards/american_express.svg'} width='250' />
         <Imag  src={'http://my-doctors.net/assests/icons/cards/master_card.svg'} width='250' />
         <Imag  src={'http://my-doctors.net/assests/icons/cards/unionpay.svg'} width='200' />
         <Imag  src={'http://my-doctors.net/assests/icons/cards/jcb.svg'} width='700' />
         </div>
         <div className={css.fl}>
          <TextField
          value={card}
          error={handleError}
          onChange={handleCard}
          label='Credit/Debit Card Number'sx={{...textFieldPadding,width:'28vw'}} />
          <TextField 
          value={expmnth}
          onChange={handleMonth}
            label='Expiration month'
          />
          <TextField
          value={expyear}
          onChange={handleYear}
          label='Expiration Year' />
          <TextField 
          value={scrty}
          onChange={handleSecurity}
            label='Security Code'sx={{...textFieldPadding,width:'28vw'}}
          />
         </div>
        </div>
        <div style={{display:'flex', gap:'2rem'}}>
          <button>Back</button>
          <button className={css.nex}>MAKE PAYMENT</button>
        </div>
    </div>
  )
}

export default Payment