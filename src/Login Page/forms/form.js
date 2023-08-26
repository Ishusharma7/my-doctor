import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import css from './form.module.css'

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add  login logic here
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
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email or Mobile Number"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
              sx={{ mt: 3, mb: 2, width:'4vw', height:'5vh', fontSize:'1.5rem' }}
            >
              LOGIN
            </Button>
            <p>Forget password</p>
          </Box>
          <p>
            Don't have an account ? <button style={{backgroundColor:'transparent', border:'none', fontSize:'1.5rem'}}>Sign up</button>
          </p>
        </Box>
      </Box>
    </Container>
  )
}


export default Form;