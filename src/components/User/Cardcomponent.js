import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { SERVER_URL } from "../../api/config"
import { useNavigate  } from "react-router-dom";
import { useAuth } from  '../../contexts/AuthContext'


function Cardcomponent() {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useAuth()
  const history = useNavigate()
 
  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        // console.log(res.data.articles);
        setPosts(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    const handleClick = () => {
      if(!currentUser){
        history('/signin')
      }
    }
    

  const useStyles = makeStyles((theme) => ({
      card: {
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        '&:hover': {
          boxShadow: "6px 6px 6px #000000"
       },
  }}))


  const classes = useStyles()
    

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {posts.map((post) => {
        return (
          <Grid item xs={12} sm={6}>
            <Card sx={{ minWidth: 275, my: 3, color: 'white', backgroundImage: `url("${SERVER_URL}${post.image}")`  }} className={classes.card} 
            onClick={()=> {
              history(`/singlepost/${post._id}`)
              handleClick()
              }}>

              <CardContent sx={{height: '300px',  backgroundColor: 'rgba(17, 16, 16, 0.6)'}} >
              <Typography
                  sx={{ fontSize: 14, mb: 6  }}
                  color="white"
                  gutterBottom
                  
                >
                {new Date(post.createdAt).toLocaleString()}
                </Typography>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="white"
                  gutterBottom
                >
                  {post.description}
                </Typography>

                <Typography
                  sx={{ fontSize: 23 }}
                  color="white"
                  gutterBottom
                >

                  {post.title}
                </Typography>

                <Typography variant="p" component="div">
                  {/* {post.content} */}
                </Typography>
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }} >Read more &rarr; </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Cardcomponent;