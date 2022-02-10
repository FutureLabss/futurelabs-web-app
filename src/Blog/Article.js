import React, {useState}  from "react";
import {TextField,Button,Container,Grid,Stack,Box,Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Nav } from 'react-bootstrap'
// import { styled } from '@mui/material/styles';
import { useAuth } from './contexts/AuthContext'
// import axios from "axios";
import { BlogManager } from "./services/blog"
import { useNavigate } from 'react-router-dom'

// const Input = styled('input')({
//   display: 'none',
// });

const blogManager = new BlogManager()

export default function Article() {
  const history = useNavigate()
  const { currentUser } = useAuth()

  const [values, setValues] = useState({});
  const [file, setFile] = useState("")

  let select;
  if(file){
    select = <p style={{color: "green"}}>File Selected</p>
  } else {
    select = <p style={{color: "red"}}>File Not Selected</p>
  }

  const handleFile = (event) => {
    setFile(event.target.files[0])
  }

  const handleChange = (e) => {
    const {name,value} = e.target
    setValues({...values, [name]:value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(values, file)
    await blogManager.addBlog(values, file).catch(error => {
      console.log(error);
    }).then(() => {
     history('/')
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(values)
  //   axios.post('https://futurelabs-blog.herokuapp.com/', values)
  // }
  return (
    <Container sx={{ backgroundColor: "white", height: '100vh', width: '100vw', marginTop: '4rem' }} maxWidth={{}}>
      <Stack sx={{ maxWidth: '30%', display: 'flex', alignItems: 'flex-end',}}>
        <Nav.Link href="/"><Button variant="contained">GO BACK</Button></Nav.Link>
      </Stack>
      <Box sx={{ width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={6}>
            <Stack spacing={2} component="form" sx={{ width: 500, maxWidth: '100%',}} noValidate autoComplete="off">
              <TextField hiddenLabel placeholder="Title" variant="filled"  size="small" name="title" onChange={handleChange}  />
              <TextField hiddenLabel id="filled-hidden-label-small" placeholder="Description" name="description" onChange={handleChange} variant="filled" size="small" />
              <label htmlFor="contained-button-file">
                <label>Upload a photo
                  <input type="file" onChange={handleFile} required></input>
                </label>
                <Stack>{select}</Stack>
                <Stack>
                  <Typography>Welcome {currentUser.username}</Typography>
                </Stack>
            </label>
            </Stack>
          </Grid>
          <Grid item sx={{ marginTop: '5rem'}} xs={6} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
              <Stack sx={{ width: '70vw', maxWidth: '100%',}}>
                <textarea  style={{height: '55vh'}} name="content" onChange={handleChange}></textarea>
              </Stack>
              <Stack>
                <Button type="submit" variant="contained" startIcon={<SendIcon />}>
                  Create
                </Button>
              </Stack>
          </Grid>
        </Grid>
        </form>
      </Box>
    </Container>
  );
}
