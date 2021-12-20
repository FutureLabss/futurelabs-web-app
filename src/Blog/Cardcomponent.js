import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
// import App from "./cardToSinglepost.js"
// import SinglePost from './Singlepost'

import { useNavigate  } from "react-router-dom";





function Cardcomponent() {
  const [posts, setPosts] = useState([]);

  const history = useNavigate()
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        console.log(res.data);
        setPosts((res.data).filter(item => {
            return item.id < 5
        }));
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    const useStyles = makeStyles((theme) => ({


      card: {

        backgroundPosition: "cover",
        backgroundImage: "url('https://res.cloudinary.com/dekbvdqnb/image/upload/v1635348411/priscilla-du-preez-XkKCui44iM0-unsplash_1_pd3v8t.png')",
        '&:hover': {
          boxShadow: "6px 6px 6px #000000"
       },
    
      }
    }) 
    
    )


    const classes = useStyles()
    

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {posts.map((post) => {
        return (
          <Grid item xs={12} sm={6}>
            <Card sx={{ minWidth: 275, my: 3, color: 'white' }} className={classes.card} onClick={()=> history(`/singlepost/${post.id}`)}>
              <CardContent sx={{height: '300px'}} >
              <Typography
                  sx={{ fontSize: 14, mb: 6  }}
                  color="white"
                  gutterBottom
                  
                >
              
                  Feb {post.id}, 2022
                </Typography>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="white"
                  gutterBottom
                >
                  {post.email}
                </Typography>

                <Typography
                  sx={{ fontSize: 23 }}
                  color="white"
                  gutterBottom
                >

                  Title {post.id} of stories
                </Typography>

                <Typography variant="p" component="div">
                  {post.body}
                </Typography>
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }} >Read more &rarr; </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 275, my: 3, color: 'white' }} className={classes.card} onClick={()=> history(`/singlepost/${post.id}`)}>
              <CardContent sx={{height: '300px'}}>
              <Typography
                  sx={{ fontSize: 14, mb: 6  }}
                  color="white"
                  gutterBottom
                  
                >
              
                  Feb {post.id}, 2022
                </Typography>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="white"
                  gutterBottom
                >
                  {post.email}
                </Typography>

                <Typography
                  sx={{ fontSize: 23 }}
                  color="white"
                  gutterBottom
                >
                  Title {post.id} of stories
                </Typography>

                <Typography variant="p" component="div">
                  {post.body}
                </Typography>
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }} >Read more &rarr; </Typography>

                {/* <Button onClick={()=> history(`/singlepost/${post.id}`)}  > Click </Button> */}
              </CardContent>
            </Card>


          </Grid>
        );
      })}
    </Grid>
  );
}

export default Cardcomponent;
