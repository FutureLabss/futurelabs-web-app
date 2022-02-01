import React, { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button, Container, IconButton, InputAdornment, Grid, Stack, Box, FormControlLabel, Checkbox, Alert, CircularProgress } from "@mui/material";
import { Close,  Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.replace("/user");
    } catch (e) {
      setError(e.message)
    }
    setLoading(false);
  }

  const [isRevealPwd, setIsRevealPwd] = useState(false);

 



  return (
    <Container sx={{ backgroundColor: 'black' }} maxWidth={{}} >

      <Box sx={{ position: 'fixed', top: "20px", right: "20px" }} position={{ top: '4px', right: '4px' }}>
        <Link to="/">

          <IconButton color="primary">
            <Close />
          </IconButton>
        </Link>
      </Box>

      <Grid sx={{ minHeight: '100vh' }} justifyContent="center" alignItems="center" container>
        <Grid item xs={12} sm={8} md={6} lg={4} >

          <Box my={4} px={4} justifyContent="center" textAlign="center">
            <Link to="/">
              <div className="logo" style={{ justifyContent: 'center', }}>Future Pay<div></div></div>
            </Link>
          </Box>

          <Box sx={{ backgroundColor: 'white' }} px={2} py={4} >
            <form onSubmit={handleSubmit}>

              <Stack spacing={4}>
                {error && (
                  <Alert severity="error">
                    {error}
                  </Alert>
                )}
                  <span>Email</span>
                <TextField  type="email" variant="outlined" inputRef={emailRef} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">

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

                <FormControlLabel label="Keep me signed in" control={<Checkbox />} />

                {loading ? <div className="text-center"> <CircularProgress size={30} /></div> : <Button type="submit" fullWidth disableElevation variant="contained">Login</Button>}

                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
                  <p className="mem-tag">Not a member? <Link to="signup">Sign up</Link></p>
                  <p className="mem-tag"><Link to="reset">Forgot Password?</Link></p>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login;
