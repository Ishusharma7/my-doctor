import React from 'react'
import TextField from '@mui/material/TextField';
import css from './form.module.css'
function Form() {
  return (
    <form>
    <div className={css.all}>
    <TextField 
    label='Email or Mobile Number' />
    <TextField 
     label='Password'   
    />
    </div>
    <div className={css.down}>
    <button>LOGIN</button>
    <h3>Forgot Password ?</h3>
    </div>
    <h5>Don't have an account? Sign up</h5>
    </form>
  )
}


export default Form;