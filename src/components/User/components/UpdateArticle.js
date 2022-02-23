import React, { useState, useEffect }  from "react";
import {TextField,Button,Container,Grid,Stack,Box,} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Nav } from 'react-bootstrap'
import { styled } from '@mui/material/styles';
import axios from "axios";
import { useParams } from "react-router-dom";

const Input = styled('input')({
  display: 'none',
});


export default function UpdateArticle() {
  const [values, setValues] = useState({});
  const [post, setPost] = useState([])
  
  const {id} = useParams();
  
  const handleChange = (e) => {
    const {name,value} = e.target
    setValues({...values, [name]:value})
  }

  useEffect(() => {
      axios.get(`https://futurelabs-blog.herokuapp.com/${id}`)
        .then(res => {
            setPost(res.data.article)
        }).catch(err => {
            console.log(err)
        })
  },[id])
// console.log(post.title)
  const handleUpdate = (e) => {
    e.preventDefault()
    // console.log(values)
    axios.put(`https://futurelabs-blog.herokuapp.com/${id}`, values)
  }
  return (
    <Container sx={{ backgroundColor: "white", height: '100vh', width: '100vw', marginTop: '4rem' }} maxWidth={{}}>
      <Stack sx={{ maxWidth: '30%', display: 'flex', alignItems: 'flex-end',}}>
        <Nav.Link href="/"><Button variant="contained">GO BACK</Button></Nav.Link>
      </Stack>
      <Box sx={{ width: "100%" }}>
      <form onSubmit={handleUpdate}>
        <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={6}>
            <Stack spacing={2} component="form" sx={{ width: 500, maxWidth: '100%',}} noValidate autoComplete="off">
              <TextField hiddenLabel defaultValue={`${post.title}`} placeholder={post.title} variant="filled"  size="small" name="title" onChange={handleChange}  />
              <TextField hiddenLabel id="filled-hidden-label-small"  placeholder="Description" name="description" onChange={handleChange} variant="filled" size="small" />
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload Cover Photo
                </Button>
            </label>
            </Stack>
          </Grid>
          <Grid item sx={{ marginTop: '5rem'}} xs={6} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
              <Stack sx={{ width: '70vw', maxWidth: '100%',}}>
                <textarea  style={{height: '55vh'}}  name="content" onChange={handleChange}></textarea>
              </Stack>
              <Stack>
                <Button type="submit" variant="contained" startIcon={<SendIcon />}>
                  Update
                </Button>
              </Stack>
          </Grid>
        </Grid>
        </form>
      </Box>
    </Container>
  );
}