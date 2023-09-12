import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import css from './form.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form() {
  const [details, setDetails] = useState({ input: '', password: '' });

  const handleLogInInput = (e) => {
    setDetails((prevState) => ({ ...prevState, input: e.target.value }));
  };
  const handlePasswordInput = (e) => {
    setDetails((prevState) => ({ ...prevState, password: e.target.value }));
  };
  
  const logInData = { password: details.password };

  const navigate = useNavigate();


  const handleSubmit = async (event) => {    
      event.preventDefault();

      if (!isNaN(+details.input)) {
        logInData.contactNumber = details.input;
        logInData.strategy = "local-mobile";
      } else {
        logInData.email = details.input;
        logInData.strategy = "local";
      }
  
      try {
        const response = await fetch(
          "http://my-doctors.net:8090/authentication",
          {
            method: "POST",
            body: JSON.stringify(logInData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const data = await response.json();
        if (data.name === "NotAuthenticated") {
        }
  
        if (data.user) {
          localStorage.setItem("userContext", JSON.stringify(data));
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <Container sx={{ border:'2px solid #ccc' ,p: 4, 
      backgroundColor:'white' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Box className={css.all} component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            onChange={handleLogInInput}
            margin="normal"
            value={ details.input}
            required
            fullWidth
            id="username"
            label="Email or Mobile Number"
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            onChange={handlePasswordInput}
            required
            fullWidth
            value={ details.password}
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, width:'4vw', height:'5vh', fontSize:{xs:'1rem', md:'1.5rem'} }}
            >
              LOGIN
            </Button>
            <p>Forget password</p>
          </Box>
          <p>
            Don't have an account ? <button className={css.btm}>Sign up</button>
          </p>
        </Box>
      </Box>
    </Container>
  )
          }


export default Form;