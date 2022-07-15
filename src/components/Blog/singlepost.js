import {Typography, Box, Grid, Avatar, Stack, AvatarGroup, Skeleton  } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../api/config"
// import { useAuth } from "../../../contexts/AuthContext"
import { icons } from '../../assets'
import DOMPurify from 'dompurify'
import './styles/article.css'
import Footer from '../layout/footer'
import ToolBar from '../layout/toolbar'

export default function Singlepost(props) {
  // const history = useNavigate();

  // const { currentUser } = useAuth()

  const { id } = useParams();

  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  // const [display, setDisplay] = useState(false)

  // async function handleDelete(id, e) {
  //   console.log(id);
  //   try {
  //     axios
  //       .delete(`https://futurelabs-blog.herokuapp.com/${id}`)
  //       .then(() => console.log("blog deleted"))
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     history("/");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }

  const data = [{text: 'dummy'},{text: 'dummy'},{text: 'dummy'},{text: 'dummy'}]

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  useEffect(() => {
    document.body.style.overflow = "auto";
    axios
      .get(`${SERVER_URL}/${id}`)
      .then((res) => {
        // console.log("db data ==> ",res.data)
        setUser(res.data.article.user);
        setPost(res.data.article);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <ToolBar />
      <Grid container direction="row" justifyContent="center" alignItems="center" md={{ p: 10 }}>
        
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} md={12} mt={5}>
          {loading ? <h4 style={{textAlign: "center", marginTop: "20px"}}> {post.title} </h4> : <Skeleton variant="text" width={210} height={40} />}
        </Grid>
      </Grid>
      <Grid item xs={12} p={1} px={{ md: 25 }}>
        <Stack direction="row" justifyContent="space-between " mb={5}>
        {loading ? (
          <AvatarGroup max={4}>
            <Avatar sx={{ width: 56, height: 56 }} alt="profile picture" src={`${user.image}`}
            />
            <h5 style={{paddingTop: '.8rem'}}> {user.username}</h5>
          </AvatarGroup> 
        ): <Skeleton variant="circular" width={56} height={56} />}
                   
        </Stack>
      </Grid>
      <Grid className="text-center" item xs={12}>
        {/* {
          display && (
          <>
            <Stack sx={{ width: "90%", display: "block", textAlign: "right" }}>
              <Button sx={{marginRight: '1.5rem', backgroundColor: 'red'}} variant="contained" onClick={(e) => handleDelete(post._id, e)} startIcon={<DeleteIcon />}>
              </Button>
              <Button onClick={() => history(`/updatepost/${post._id}`)} variant="contained" startIcon={<EditIcon />}>
              </Button>
            </Stack>
          </>
          )
        } */}
        <Stack sx={{ display: "inline-block", textAlign: 'center', width: '68%', marginTop: '.5rem'}}>
        {loading ? (
          <img
            className="singlepost__cover-image"
            src={`${post.image}`}
            alt=""
          />
        ): <Skeleton variant="rectangular" animation="wave" width="100%" height="60vh" />}
          
        </Stack>
        <Grid container-fluid item xs={12} mt={5} mb={5} sx={{display: "flex", justifyContent: 'center'}}>
          <Box className="singlepost__content-area" sx={{ textAlign: "justify", width: '70%', }}>
            {(loading ? Array.from(new Array(2)) : data).map((item, index) => (
              <Grid key={index} item xs={12} sm={12}>
                {item ? <Skeleton  width="100%" /> : ""}
              </Grid>
                
            ))}
            {loading ? (
              <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>
            ): <Skeleton  width="60%" />}
          </Box>
        </Grid>
        <Grid display="flex" direction="row" justifyContent="space-between" marginBottom="10rem" marginTop="5rem">
        <Grid item
          sx={{display: 'flex', margin: {md: '0 8rem'} }}
        >
        {loading ? (
          <AvatarGroup max={4}>
            <Avatar sx={{ width: 56, height: 56 }} alt="profile picture" src={`${user.image}`}
            />
          </AvatarGroup> 
        ): <Skeleton variant="circular" width={56} height={56} />}
        <Stack sx={{textAlign: 'left', width: 'max-content'}}>
        {loading ? <Typography style={{fontWeight: 'bold'}}> {user.username}</Typography> : <Skeleton variant="text" width={210} />}
          
          <Typography>{user.role}, Futurelabs</Typography>
        {loading ? (
          <Typography>{new Date(post.createdAt).toLocaleDateString('en-us', { hour: "numeric"})}</Typography>
        ) : <Skeleton variant="text" width={210} />}
          
        </Stack>
        </Grid>
        <Grid item columnSpacing={2} sx={{ margin: {md: '0 6rem'}, cursor: 'pointer'}} >
          <a target="_blank" rel="noreferrer" href={user.twitter}><img style={{margin: '.2rem .4rem'}} src={icons.twitter} alt="twitter icon" /></a>
          <a target="_blank" rel="noreferrer" href={user.facebook}><img style={{margin: '.2rem .4rem'}} src={icons.facebook} alt="facebook icon" /></a>
          <a target="_blank" rel="noreferrer" href={user.linkedin}><img style={{margin: '.2rem .4rem'}} src={icons.linkedin} alt="linkedin icon" /></a>
        </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
