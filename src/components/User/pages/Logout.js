import React from 'react'
import {  Grid, Card, CardContent,  Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import { icons } from '../../assets'


function Logout() {
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
            <Button variant="outlined">Yes</Button>
            <Button variant="outlined">No</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Logout