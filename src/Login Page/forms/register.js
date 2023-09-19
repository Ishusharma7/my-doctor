import React, {useState } from "react";
import css from "./register.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import axios from 'axios'; 
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Register = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "male",
    day: "",
    month: "",
    year: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputErrors, setInputErrors] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordChecks, setPasswordChecks] = useState({
    isOpen: false,
    lowercase: "",
    uppercase: "",
    specialChar: "",
    number: "",
    passwordLength: "",
    match: "",
  });

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

  const validateInput = (e) => {
    let { name, value } = e.target;

    setInputErrors((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "fullName":
          if (!value) {
            stateObj[name] = "Please enter a valid name!";
          } else {
            stateObj[name] = "";
          }
          break;
        case "contactNumber":
          if (!value || !/^[0-9]{10}$/.test(value)) {
            stateObj[name] = "Please enter a valid 10-digit mobile number!";
          } else {
            stateObj[name] = "";
          }
          handleMobile()
          break;
        case "email":
          if (!value || !/\S+@\S+\.\S+/.test(value)) {
            stateObj[name] = "Please enter a valid e-mail address!";
          } else {
            stateObj[name] = "";
          }
          handleEmail()
          break;

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


  const handleEmail = async (event) => {
    const newInputErrors = { ...inputErrors }; // Create a copy of the existing inputErrors state
  
    // Check if email exists
    try {
      const emailResponse = await axios.get(`http://my-doctors.net:8090/accounts?email=${formData.email}`);
      if (emailResponse.data.exists) {
        newInputErrors.email = "Email already exists.";
      } else {
        newInputErrors.email ='';
      }
    } catch (error) {
      // Handle API request errors here
      console.error('Email already exists', error);
      newInputErrors.email = "Email address already exists!"; // Set a generic error message on API request error
    }
  
    setInputErrors(newInputErrors); // Update the input errors state
  }
  
  const handleMobile = async (event) => {
    const newInputErrors = { ...inputErrors }; // Create a copy of the existing inputErrors state
  
    // Check if mobile number exists
    try {
      const mobileResponse = await axios.get(`http://my-doctors.net:8090/accounts?contactNumber=${formData.contactNumber}`);
      if (mobileResponse.data.exists) {
        newInputErrors.contactNumber = "Mobile number already exists.";
      } else {
        newInputErrors.contactNumber ='';
      }
    } catch (error) {
      // Handle API request errors here
      console.error('MOBILE NUMBER ALREADY EXISTS', error);
      newInputErrors.contactNumber = "Mobile number already exists!"; // Set a generic error message on API request error
    }
  
    setInputErrors(newInputErrors); // Update the input errors state
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
     // Split the full name into first name and last name
  const fullNameArray = formData.fullName.split(' ');
  const firstName = fullNameArray[0];
  const lastName = fullNameArray.slice(1).join(' ');

  // Update the formData object with firstName and lastName
  const updatedFormData = {
    ...formData,
    firstName: firstName,
    lastName: lastName,
  };
  console.log(updatedFormData)
    try {
      const response = await fetch("http://my-doctors.net:8090/patients", {
        method: "POST",
        body: JSON.stringify(updatedFormData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      setFormSubmitted(true);
      setFormData({
        fullName: "",
        gender: "male",
        day: "",
        month: "",
        year: "",
        contactNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePasswordCheck = () => {
    setPasswordChecks((prev) => {
      return { ...prev, isOpen: true };
    });
  };


  return (
    <div className={css.every}>
    <div className={formSubmitted ? css.suc : css.hidden}>
    <TaskAltIcon  style={{fontSize:'2.8rem', color:'#4caf50'}}/>
    <h7>Signed up successfully!</h7>
    </div>
      <h2 className={css.form_title}>Create an account</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.registration_form_child}>
          <label className={css.full}>Full Name*</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Enter name"
            onChange={handleInputChange}
            onBlur={validateInput}
            className={`${css.input} ${
              inputErrors.fullName ? css.errorBorder : ""
            }`}
            required
          />
          {inputErrors.fullName && (
            <p className={css.error}>{inputErrors.fullName}</p>
          )}
        </div>
        <div className={css.registration_form_child}>
          <FormControl>
            <FormLabel id="demo-customized-radios" sx={{ color: "#000",fontSize:{xs:'1.5rem', md:'2rem'} }}>
              Gender*
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label={<span className={css.hq}>Male</span>} />
              
              <FormControlLabel
                value="female"
                control={<Radio />}
                label={<span className={css.hq}>Female</span>}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label={<span className={css.hq}>Other</span>}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={css.registration_form_child}>
          <label className={css.full}>Mobile Number*</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            placeholder="Enter Mobile Number"
            onBlur={validateInput}
            className={`${css.input} ${
              inputErrors.contactNumber ? css.errorBorder : ""
            }`}
            maxLength="10"
            required
          />
          {inputErrors.contactNumber && (
            <p className={css.error}>{inputErrors.contactNumber}</p>
          )}
        </div>
        <div className={css.registration_form_child}>
          <label className={css.full}>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className={`${css.input} ${
              inputErrors.email ? css.errorBorder : ""
            }`}
            onChange={handleInputChange}
            onBlur={validateInput}
            placeholder="abc@gmail.com"
            required
          />
          {inputErrors.email && (
            <p className={css.error}>{inputErrors.email}</p>
          )}
        </div>
        <div className={css.registration_form_child}>
          <label className={css.full}>Create Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            className={`${css.input} ${
              inputErrors.password ? css.errorBorder : ""
            }`}
            onChange={handleInputChange}
            onBlur={validateInput}
            onClick={handlePasswordCheck}
            autoComplete="new-password"
            placeholder="create password"
            required
          />
          {inputErrors.password && (
            <p className={css.error}>{inputErrors.password}</p>
          )}
        </div>
        <div className={css.registration_form_child}>
          <label className={css.full}>Confirm Password*</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            className={css.input}
            onChange={handleInputChange}
            onBlur={validateInput}
            placeholder="confirm password"
            autoComplete="new-password"
            required
          />
        </div>
        {passwordChecks.isOpen && (
          <div>
            <p className={css.icon}>
              {passwordChecks.lowercase === "" ? (
                <CircleOutlinedIcon color="primary" />
              ) : passwordChecks.lowercase === "checked" ? (
                <CheckCircleOutlineOutlinedIcon color="success" />
              ) : (
                <CancelOutlinedIcon color="error" />
              )}
              Must contain lowercase letter.
            </p>

            <p className={css.icon}>
              {passwordChecks.uppercase === "" ? (
                <CircleOutlinedIcon color="primary" />
              ) : passwordChecks.uppercase === "checked" ? (
                <CheckCircleOutlineOutlinedIcon color="success" />
              ) : (
                <CancelOutlinedIcon color="error" />
              )}
              Must contain uppercase letter.
            </p>

            <p className={css.icon}>
              {passwordChecks.specialChar === "" ? (
                <CircleOutlinedIcon color="primary" />
              ) : passwordChecks.specialChar === "checked" ? (
                <CheckCircleOutlineOutlinedIcon color="success" />
              ) : (
                <CancelOutlinedIcon color="error" />
              )}
              Mustcontain at least one special character.
            </p>

            <p className={css.icon}>
              {passwordChecks.number === "" ? (
                <CircleOutlinedIcon color="primary" />
              ) : passwordChecks.number === "checked" ? (
                <CheckCircleOutlineOutlinedIcon color="success" />
              ) : (
                <CancelOutlinedIcon color="error" />
              )}
              Must contain at least one number.
            </p>

            <p className={css.icon}>
              {passwordChecks.passwordLength === "" ? (
                <CircleOutlinedIcon color="primary" />
              ) : passwordChecks.passwordLength === "checked" ? (
                <CheckCircleOutlineOutlinedIcon color="success" />
              ) : (
                <CancelOutlinedIcon color="error" />
              )}
              Must contain at least 6 characters.
            </p>

            <p className={css.icon}>
              {passwordChecks.match === "" ? (
                <CircleOutlinedIcon color="primary" />
              ) : passwordChecks.match === "checked" ? (
                <CheckCircleOutlineOutlinedIcon color="success" />
              ) : (
                <CancelOutlinedIcon color="error" />
              )}
              Passwords must match.
            </p>
          </div>
        )}
        <Button
          sx={{ mt: 2,  width:'7vw', height:'5vh', fontSize:{xs:'.8rem', md:'1.5rem'}, borderRadius:'5px' }}
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          disabled={
            !(
              passwordChecks.lowercase === "checked" &&
              passwordChecks.match === "checked" &&
              passwordChecks.uppercase === "checked" &&
              passwordChecks.number === "checked" &&
              passwordChecks.passwordLength === "checked" &&
              passwordChecks.specialChar === "checked" &&
              inputErrors.fullName === "" &&
              inputErrors.contactNumber === "" &&
              inputErrors.email === "" &&
              inputErrors.password === "" &&
              inputErrors.confirmPassword === ""
            )
          }
        >
          REGISTER
        </Button>
        <p>
          Already have an account? <button className={css.btm}>Sign in</button>
        </p>
      </form>
    </div>
  )
}
export default Register