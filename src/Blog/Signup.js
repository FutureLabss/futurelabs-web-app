import React, { useRef, useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, IconButton, InputAdornment, Grid, Stack, FormControlLabel, Checkbox, Alert, TextField, CircularProgress } from "@mui/material";
import { Close,   Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const fullnameRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(fullnameRef.current.value, emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }

  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <Container sx={{ backgroundColor: 'white' }} maxWidth={{}} >

      <Box sx={{ position: 'fixed', top: "20px", right: "20px" }} position={{ top: '4px', right: '4px' }}>
        <Link to="/">

          <IconButton color="primary">
            <Close />
          </IconButton>
        </Link>
      </Box>

      <Grid sx={{ minHeight: '100vh' }} justifyContent="center" alignItems="center" container>
        <Grid item xs={12} py={10} sm={8} md={6} lg={4} >

          <Box my={3} px={4} justifyContent="center" textAlign="center">
            <Link to="/">
              <div  style={{ justifyContent: 'center', }}><div></div></div>
            </Link>

            <h4 style={{ color: 'black', paddingTop: '20px' }}>
              Registering to this website, you accept our Terms & Conditions and our
              Privacy Policy
            </h4>
          </Box>

          <Box sx={{ backgroundColor: '#DADFF7' }} px={2} py={4} >
            <form onSubmit={handleSubmit}>

              <Stack spacing={3}>
                {error && (
                  <Alert severity="error">
                    {error}
                  </Alert>
                )}

                  <span>Full Name</span>
                <TextField  variant="outlined"  inputRef={fullnameRef} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <Person /> */}
                    </InputAdornment>
                  ),
                }} />
                <span>Email</span>
                <TextField type="email" variant="outlined" inputRef={emailRef} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <Mail /> */}
                    </InputAdornment>
                  ),
                }} />
                <span>Password</span>
                <TextField  type={isRevealPwd ? 'text' : 'password'} variant="outlined" inputRef={passwordRef} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <Lock /> */}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => { setIsRevealPwd(!isRevealPwd) }}>
                        {isRevealPwd ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }} />

                <p className='text-center'>  Your password must be at least 6 characters long and must contain
                  letters, numbers and special characters. Cannot contain
                  whitespace.</p>

                <FormControlLabel label="Receive News From Future Blog By Email" control={<Checkbox />} />

                {loading ? <div className="text-center"> <CircularProgress size={30} /></div> : <Button type="submit" fullWidth disableElevation variant="contained">Sign Up</Button>}

                <p className="mem-tag">Already a member? <Link to="login">Login</Link></p>
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Signup;