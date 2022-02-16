import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { SERVER_URL } from "../../api/config"
import { useNavigate  } from "react-router-dom";
import { useAuth } from  '../../contexts/AuthContext'
import { icons } from '../assets'


function Cardcomponent() {
  const [posts, setPosts] = useState([]);
  const [colorFavourite, setColorFavourite] = useState(false)
  const [colorBookmark, setColorBookmark] = useState(false)
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
    
    const handleColor = (value) => {
      console.log(value)
      if(value === "favourite"){
        setColorFavourite(!colorFavourite)
      }
      if(value === "bookmark"){
        setColorBookmark(!colorBookmark)
      }
    }
    let colorValue;
    if(colorFavourite){
      colorValue = 'red'
    }
    let bookmarkColorValue;
    if(colorBookmark){
      bookmarkColorValue= 'blue'
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
            >

              <CardContent sx={{height: '300px',  backgroundColor: 'rgba(17, 16, 16, 0.6)'}} >
              <Stack sx={{ mb: 6, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography
                  sx={{ fontSize: 14}}
                  color="white"
                  gutterBottom
                >
                  {new Date(post.createdAt).toLocaleDateString('en-us', { year: "numeric", day: "numeric",month: "short"})}
                </Typography>
                <Grid direction="row" spacing={2} container sx={{width: '10rem', cursor: 'pointer'  }}>
                  <Grid item onClick={() => handleColor('bookmark')}><img  style={{backgroundColor: bookmarkColorValue,}} src={icons.bookmark} alt="bookmark icon" /></Grid>
                  <Grid item onClick={() => handleColor('favourite')}><img style={{backgroundColor: colorValue,}} src={icons.favouriteSVG} alt="favourite icon" /></Grid>
                  <Grid item ><img src={icons.comment} alt="comment icon" /></Grid>
                </Grid>
              </Stack>

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
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', cursor: 'pointer' }} onClick={()=> {
                  history(`/singlepost/${post._id}`)
                  handleClick()
                }}>
                  Read more &rarr; </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Cardcomponent;
