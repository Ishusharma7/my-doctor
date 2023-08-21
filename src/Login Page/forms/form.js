import React from 'react'
import TextField from '@mui/material/TextField';
import css from './form.module.css'
function Form(props) {
  return (
    <div className={css.form}>
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
    <div className={css.sig}>
    <h5>Don't have an account? <button onClick={props.handleSign}>Sign up</button></h5>
    </div>
    </form>
    </div>
  )
}


export default Form;