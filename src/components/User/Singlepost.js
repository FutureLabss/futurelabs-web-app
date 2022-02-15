import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AvatarGroup from "@mui/material/AvatarGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../api/config"
import { useAuth } from "../../contexts/AuthContext"
import DOMPurify from 'dompurify'
import '../styles/article.css'

export default function Singlepost(props) {
  const history = useNavigate();

  const { currentUser } = useAuth()

  const { id } = useParams();

  const [post, setPost] = useState({});
  const [name, setName] = useState({});
  const [display, setDisplay] = useState(false)

  async function handleDelete(id, e) {
    console.log(id);
    try {
      axios
        .delete(`https://futurelabs-blog.herokuapp.com/${id}`)
        .then(() => console.log("blog deleted"))
        .catch((err) => {
          console.log(err);
        });
      history("/");
    } catch (e) {
      console.log(e.message);
    }
  }

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/${id}`)
      .then((res) => {
        setName(res.data.article.user);
        setPost(res.data.article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    if(currentUser.id === name._id){
      setDisplay(true)
    }
  },[currentUser.id, name._id])

  return (
    <>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: "10px",
          borderColor: "#000000",
        }}
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        md={{ p: 10 }}
        sx={{marginTop: '4rem'}}
      >
        <Grid item xs={6} sx={{ textAlign: "center" }} md={2}>
          <h5>Technology</h5>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }} md={2}>
          <h5>Investment</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }} md={2}>
          <h5>Startups</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }} md={2}>
          <h5> Health</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }} md={2}>
          <h5> Business</h5>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }} md={12} mt={5}>
          <h1> {post.title} </h1>
        </Grid>
      </Grid>
      <Grid item xs={12} p={1} px={{ md: 25 }}>
        <Stack direction="row" justifyContent="space-between " mb={5}>
          <AvatarGroup max={4}>
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="Remy Sharp"
              src={`${SERVER_URL}${post.image}`}
            />
            <h5> {name.fullname}</h5>
          </AvatarGroup>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </AvatarGroup>
        </Stack>
      </Grid>
      <Grid className="text-center" item xs={12}>
        {
          display && (
          <>
            <Stack sx={{ width: "90%", display: "block", textAlign: "right" }}>
              <Button
                sx={{marginRight: '1.5rem', backgroundColor: 'red'}}
                variant="contained"
                onClick={(e) => handleDelete(post._id, e)}
                startIcon={<DeleteIcon />}
              >
              </Button>
              <Button
                onClick={() => history(`/updatepost/${post._id}`)}
                variant="contained"
                startIcon={<EditIcon />}
              >
              </Button>
            </Stack>
          </>
          )
        }
        <Stack sx={{ display: "block",textAlign: "center", marginTop: '.5rem'}}>
          <img
            className="singlepost__cover-image"
            src={`${SERVER_URL}${post.image}`}
            alt=""
          />
        </Stack>
        <Grid container-fluid item xs={12} mt={5} mb={5} sx={{display: "flex", justifyContent: 'center'}}>
          <Box className="singlepost__content-area" sx={{ textAlign: "justify", width: '60%', fontSize: '1.8rem' }}>
            <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>
          </Box>
        </Grid>
        <Box
          sx={{
            textAlign: "left",
            mx: 20,
            fontStyle: "italic",
            fontSize: "h6.fontSize",
          }}
        >
          {new Date(post.createdAt).toLocaleString()}
        </Box>
      </Grid>
    </>
  );
}
