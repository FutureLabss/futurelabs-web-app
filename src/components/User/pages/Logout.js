import React from 'react';
import {  Grid, Card, CardContent,  Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import { icons } from '../../assets';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function Logout() {
  // const [error, setError] = useState("")
  const {logout} = useAuth();
  const navigate = useNavigate();

  function handleLogout(value){
  
    try{
      if(value === "Yes"){
        logout();
        navigate('/')
      } else {
        navigate('/user')
      }
      
    } catch(error) {
      console.log(error)
    }
  }

  const useStyles = makeStyles((theme) => ({
    card: {
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      '&:hover': {
        boxShadow: "10px 10px 10px #000000"
     },
  }}))

  const classes = useStyles()

  return (
    <Grid sx={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} rowSpacing={1} columnSpacing={1} maxWidth={{}}>
      <Card sx={{ width: 500, my: 3, }} className={classes.card} >
        <CardContent sx={{height: '300px',  }}>
          <Stack spacing={2} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height:"100%"}}>
            <img src={icons.exclamation} width="25px" height="25px" alt="warning sign" />
            <Typography>Are you sure?</Typography>
            <Stack direction="row" spacing={4}>
            <Button variant="outlined" onClick={() => handleLogout('Yes')}>Yes</Button>
            <Button variant="outlined" onClick={() => handleLogout('No')}>No</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Logout