import React, {useState, useRef} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { TextField,Card,CardContent, Button,Typography, Container, IconButton, InputAdornment, Grid, Stack, Box,  Alert, CircularProgress } from "@mui/material";
import { Close, VisibilityOff, Visibility } from "@mui/icons-material";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

     async function handleSubmit(e) {
      e.preventDefault();

      try {
        setError("");
        setLoading(true);
        await signup(usernameRef.current.value, emailRef.current.value, passwordRef.current.value);
        history("/signin");
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    }
    
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <Container sx={{backgroundColor: 'white'}} maxWidth={{}}>
    <Box sx={{ position: 'fixed', top: "90px", right: "100px" }} position={{ top: '4px', right: '4px' }}>
        <Link to="/">
          <IconButton color="primary">
            <Close />
          </IconButton>
        </Link>
      </Box>
       <Grid sx={{ minHeight: '100vh'}} justifyContent="center" alignItems="center" container>
            <Card sx={{ height: 380, minWidth: 700, display: 'flex'}}>
                <CardContent  sx={{ height: '380px', width: '50%',backgroundSize: "cover",  backgroundImage: `url("https://res.cloudinary.com/usenmfon/image/upload/v1644929098/FutureLabs/future4_3_1_otjupv.png")`}}>
                  <Grid sx={{height: '100%'}} container rowSpacing={1} direction="column" justifyContent="space-around" alignItems="center" >
                    <Stack>
                      <Typography color="white">WE ARE FUTURISTS!</Typography>
                      <Typography color="white" fontWeight="600" mt={3}>We create indelible <br /> digital experiences.</Typography>
                    </Stack>
                    <img style={{width: '12vw'}} src="https://res.cloudinary.com/usenmfon/image/upload/v1644928834/FutureLabs/LOGO_FUTURE_3_uek81j.png" alt="futurelabs logo" />
                  </Grid>
                </CardContent>
                <CardContent sx={{width: '50%'}}>
                    <Grid container rowSpacing={1} direction="column" >
                        <Typography sx={{fontSize: 15, fontWeight: 600, textAlign: 'center'}}>Create Account</Typography>
                        <p className="mem-tag" style={{textAlign: 'center'}}>Already a member? <Link to="login" style={{color: '#FF9000', textDecoration: 'none'}}>Login</Link></p>
                        <form onSubmit={handleSubmit}>
                                <Stack spacing={4}>
                        {error && (
                        <Alert severity="error">
                            {error}
                        </Alert>
                        )}
                        <TextField placeholder='Username' type="text" variant="outlined"  inputRef={usernameRef} InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {/* <Person /> */}
                            </InputAdornment>
                          ),
                        }} />
                        <TextField placeholder='Email' type="email" variant="outlined" inputRef={emailRef} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">

                            </InputAdornment>
                        ),
                        }} />
                        <TextField placeholder='Password' type={isRevealPwd ? 'text' : 'password'} variant="outlined" inputRef={passwordRef} InputProps={{
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

                          {/* <FormControlLabel label="I agree to the Terms and Privacy Policy." control={<Checkbox />} /> */}

                          {loading ? <div className="text-center"> <CircularProgress size={30} /></div> : <Button type="submit" fullWidth disableElevation sx={{backgroundColor: '#FF9000'}} variant="contained">Sign Up</Button>}
                        </Stack>
                        </form>
                    </Grid>
                </CardContent>
            </Card>
       </Grid>

    </Container>
  )
}

export default Signup
