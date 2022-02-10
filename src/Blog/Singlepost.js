import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AvatarGroup from "@mui/material/AvatarGroup";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { SERVER_URL } from "./api/config"

export default function Singlepost(props) {
  const history = useNavigate();

  const { id } = useParams();

  const [post, setPost] = useState({});

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

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/${id}`)
      .then((res) => {
        console.log("single post data ==> ", res.data);
        setPost(res.data.article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(id);

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
              src={`http://localhost:5000${post.image}`}
            />
            <h5> {post.description}</h5>
          </AvatarGroup>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </AvatarGroup>
        </Stack>
      </Grid>
      <Grid className="text-center" item xs={12}>
        <Stack sx={{ width: "5rem", display: "block", textAlign: "right" }}>
          <Button
            variant="contained"
            onClick={(e) => handleDelete(post._id, e)}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Stack>
        <Stack sx={{ width: "5rem", display: "block", textAlign: "right" }}>
          <Button
            onClick={() => history(`/updatepost/${post._id}`)}
            variant="contained"
            startIcon={<UpdateIcon />}
          >
            Update
          </Button>
        </Stack>
        <Stack>
          <img
            className="imgsss"
            src={`http://localhost:5000${post.image}`}
            alt=""
          />
        </Stack>
        <Grid container-fluid item xs={12} mt={5} mb={5}>
          <Box sx={{ textAlign: "center", m: 1 }}>
            {post.content}

            {/* Coca-cola focuses on improving the community relationships and
            increasing thhier happiness,that
            positively reflects on thier public image, resulting in customer and
            revenue rise.Coca-cola focuses on improving<br/> */}
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
