import React from 'react'
import css from './register.module.css'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export default function Register(props) {
  const currentDate = new Date();
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDay, setSelectedDay] = useState(currentDate.getDate().toString());
  const [selectedMonth, setSelectedMonth] = useState((currentDate.getMonth() + 1).toString());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear().toString());
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword:'',
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword:false,
  });

  const [passwordChecks, setPasswordChecks]=useState({
    lowercase: '',
    uppercase: '',
    speialcharacter: '',
    number: '',
    sixcharacters: '',
    match: '',
  });


  const validatePassword = (value) => {
             setPasswordChecks((prev) => {
          const passwordObj = { ...prev };
          // Check lowercase letter
          if (!/[a-z]/.test(value)) {
                  passwordObj.lowercase = "unchecked";
         } else{
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
                  passwordObj.speialcharacter = "unchecked";
         } else {
                 passwordObj.speialcharacter = "checked";
         }
    
          // Check number
            if (!/[0-9]/.test(value)) {
             passwordObj.number = "unchecked";
           } else {
             passwordObj.number = "checked";
           }
          // Check length
           if (value.length < 6) {
            passwordObj.sixcharacters = "unchecked";
           } else {
            passwordObj.sixcharacters = "checked";
           }
    
          // Check password match
    if (data.password !== data.confirmPassword) {
      passwordObj.match = "unchecked";
    } else {
      passwordObj.match = "checked";
    }
        return passwordObj;
         });
       };



  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };


    const handleFieldChange = (event) =>{
      const {value,name} = event.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    const handleFieldBlur = (event) => {
      const {value,name} = event.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      
      switch (name) {
        case 'fullName':
          if(value.length<1){
            setErrors((prevErrors) => ({
              ...prevErrors,
              [name]: true,
            }));
          }
          else{
            setErrors((prevErrors) => ({
              ...prevErrors,
              [name]: false,
            }));
          }
          break;
        case 'email':
          if(!value.includes('@')){
            setErrors((prevErrors) => ({
              ...prevErrors,
              [name]: true,
            }));
          }
          else{
            setErrors((prevErrors) => ({
              ...prevErrors,
              [name]: false,
            }));
          }
          break;
        case 'phone':
          if(value.length !== 10){
            setErrors((prevErrors) => ({
              ...prevErrors,
              [name]: true,
            }));
          }
          else{
            setErrors((prevErrors) => ({
              ...prevErrors,
              [name]: false,
            }));
          }
          break;
          case 'password':
            if(!value){
              setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: true,
              }));
            }
            else{
                validatePassword(value);
              }
            break;
            case 'confirmPassword':
  if (!value) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: true,
    }));
  } else if (data.password && value === data.password) {
    setPasswordChecks((prev) => ({
      ...prev,
      match: "checked",
    }));
  }
  break;

        default:
          break;
      }
    };

    const handlePasswordCheck = () => {
      setPasswordChecks((prev) => {
        return { ...prev, isOpen: true };
      });
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
                name = 'fullName'
                value = {data.fullName}
                onBlur={handleFieldBlur}
                onChange={handleFieldChange}
                error={errors.fullName}
                helperText={
                  errors.fullName?<Typography  style={{ fontSize: '25px' }} >Please enter a valid name </Typography> : ''
                }
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
        



        <div className={css.dob}>
      <h2>Date of Birth*</h2>
      <select value={selectedDay} onChange={handleDayChange}>
        <option value="">Day</option>
        {daysInMonth.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Month</option>
        {months.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>






        <div className={css.down}>
        <label>
          Mobile Number*
            <TextField
            placeholder='Enter Mobile Number'
            InputProps={{
            inputProps: {
          maxLength: 10,
          },
          }}
            name = 'phone'
            value = {data.phone}
            onBlur={handleFieldBlur}
            onChange={handleFieldChange}
            error={errors.phone}
            helperText={errors.phone ?<Typography  style={{ fontSize: '25px' }} >Please enter a valid 10-digit mobile number!</Typography> : ''}
             />
             </label>
             <label>
             Email*
             <TextField
            placeholder='abc@gmail.com'
            name = 'email'
            value = {data.email}
            onBlur={handleFieldBlur}
            onChange={handleFieldChange}
            error={errors.email}
            helperText={errors.email ? <Typography  style={{ fontSize: '25px' }} >Please enter a valid e-mail address! </Typography>: ''}
             />
             </label>
             <label>
             Create Password*
             <TextField
            placeholder='Create Password'
            type='password'
            name = 'password'
            value = {data.password}
            onClick={handlePasswordCheck}
            onChange={handleFieldBlur}
            error={errors.password}
            helperText={errors.password ? <Typography  style={{ fontSize: '25px' }} >invalid password </Typography>: ''}
             />
             </label>
             <label>
             Confirm Password*
             <TextField
              placeholder='Confirm Password'
              type='password'
              name='confirmPassword' // Make sure the name matches the key used in the function
              value={data.confirmPassword}
              onChange={handleFieldBlur}
              error={errors.confirmPassword}
              helperText={errors.confirmPassword ? <Typography style={{ fontSize: '25px' }}>Password does not match</Typography> : ''}
            />

             </label>
        </div>
        <div className={css.hidden}>
        <p>
          {passwordChecks.lowercase === "" ?(
            <CircleOutlinedIcon color = 'primary' sx={{ width: '3vh', height: '3vh' }}/>):
            passwordChecks.lowercase ==="checked" ? (
            <CheckCircleOutlineOutlinedIcon color ='success' sx={{ width: '3vh', height: '3vh' }}/> ):
            (<CancelOutlinedIcon color ='error' sx={{ width: '3vh', height: '3vh' }}/>)
          }
          Must contain lowercase letter
        </p>
        <p>
        {passwordChecks.uppercase === "" ?(
            <CircleOutlinedIcon color = 'primary' sx={{ width: '3vh', height: '3vh' }}/>):
            passwordChecks.uppercase ==="checked" ? (
            <CheckCircleOutlineOutlinedIcon color ='success' sx={{ width: '3vh', height: '3vh' }}/> ):
            (<CancelOutlinedIcon color ='error' sx={{ width: '3vh', height: '3vh' }}/>)
          }
          Must contain uppercase letter
        </p>
        <p>
        {passwordChecks.speialcharacter === "" ?(
            <CircleOutlinedIcon color = 'primary' sx={{ width: '3vh', height: '3vh' }}/>):
            passwordChecks.speialcharacter ==="checked" ? (
            <CheckCircleOutlineOutlinedIcon color ='success' sx={{ width: '3vh', height: '3vh' }}/> ):
            (<CancelOutlinedIcon color ='error' sx={{ width: '3vh', height: '3vh' }}/>)
          }
          Must contain at leasr one special character
        </p>
        <p>
        {passwordChecks.number === "" ?(
            <CircleOutlinedIcon color = 'primary' sx={{ width: '3vh', height: '3vh' }}/>):
            passwordChecks.number ==="checked" ? (
            <CheckCircleOutlineOutlinedIcon color ='success' sx={{ width: '3vh', height: '3vh' }}/> ):
            (<CancelOutlinedIcon color ='error' sx={{ width: '3vh', height: '3vh' }}/>)
          }
          Must contain at leat one number
        </p>
        <p>
        {passwordChecks.sixcharacters === "" ?(
            <CircleOutlinedIcon color = 'primary' sx={{ width: '3vh', height: '3vh' }}/>):
            passwordChecks.sixcharacters ==="checked" ? (
            <CheckCircleOutlineOutlinedIcon color ='success' sx={{ width: '3vh', height: '3vh' }}/> ):
            (<CancelOutlinedIcon color ='error' sx={{ width: '3vh', height: '3vh' }}/>)
          }
          Must contain at least 6 characters
        </p>
        <p>
        {passwordChecks.match === "" ?(
            <CircleOutlinedIcon color = 'primary' sx={{ width: '3vh', height: '3vh' }}/>):
            passwordChecks.match ==="checked" ? (
            <CheckCircleOutlineOutlinedIcon color ='success' sx={{ width: '3vh', height: '3vh' }}/> ):
            (<CancelOutlinedIcon color ='error' sx={{ width: '3vh', height: '3vh' }}/>)
          }
          Must match
          </p>
        </div>
        <div className={css.last}>
        <button>Register</button>
        <div className={css.but}>
        <h4>Already have an account? <button onClick={props.handlesiigin}>Sign in</button></h4>
        </div>
        </div>
    </form>
  )
}