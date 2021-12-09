import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";

function Cardcomponent() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts((res.data).filter(item => {
            return item.id < 20
        }));
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {posts.map((post) => {
        return (
          <Grid item xs={12} sm={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent sx={{height: '300px'}}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="black"
                  gutterBottom
                >
                  Author
                </Typography>

                <Typography
                  sx={{ fontSize: 23 }}
                  color="black"
                  gutterBottom
                >
                  Title
                </Typography>

                <Typography variant="p" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>Read more </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Cardcomponent;
