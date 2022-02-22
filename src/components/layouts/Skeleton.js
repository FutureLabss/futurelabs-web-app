import React from 'react';
import {Grid,Stack, Pagination, Typography, Skeleton, Card, CardContent } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { icons } from '../assets'
import { useNavigate  } from "react-router-dom";
import { SERVER_URL } from '../../api/config'


export default function Media(props) {
  const { loading , posts, page, setPage, handleClick, pages } = props;
  // console.log("posts => ",loading)
  const history = useNavigate()

  // const [page, setPage] = useState(1)


  // const [colorFavourite, setColorFavourite] = useState(false)
  // const [colorBookmark, setColorBookmark] = useState(false)

  // const handleColor = (value) => {
  //   console.log(value)
  //   if(value === "favourite"){
  //     setColorFavourite(!colorFavourite)
  //   }
  //   if(value === "bookmark"){
  //     setColorBookmark(!colorBookmark)
  //   }
  // }
  // let colorValue;
  // if(colorFavourite){
  //   colorValue = 'red'
  // }
  // let bookmarkColorValue;
  // if(colorBookmark){
  //   bookmarkColorValue= 'blue'
  // }
  const handleChangePage = (event, value) => {
    console.log("page no. ===>", value)
    setPage(value)
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
  <>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {(loading ? Array.from(new Array(8)) : posts).map((item, index) => (
        <Grid key={index} item xs={12} sm={6}>
        {item ? "" : (
            <Skeleton width="60%" />
        )}

          {item ? (
            <Card sx={{ minWidth: 275, my: 3, color: 'white', backgroundImage: `url("${SERVER_URL}${item.image}")`  }} className={classes.card} 
            >
              <CardContent sx={{height: '300px',  backgroundColor: 'rgba(17, 16, 16, 0.6)'}} >
              <Stack sx={{ mb: 6, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography
                  sx={{ fontSize: 14}}
                  color="white"
                  gutterBottom
                  className="raleway__font"
                >
                  {new Date(item.createdAt).toLocaleDateString('en-us', { year: "numeric", day: "numeric",month: "short"})}
                </Typography>
                <Grid direction="row" spacing={2} container sx={{width: '10rem', cursor: 'pointer'}}>
                  <Grid item >
                    <BookmarkBorderOutlinedIcon style={{marginTop:'.3rem'}}/>
                  </Grid>
                  <Grid item style={{ paddingTop: 0 }}>
                    <p className="count">0</p>
                    <FavoriteBorderOutlinedIcon style={{margin: 0, }} />
                  </Grid>
                  <Grid item style={{ paddingTop: 0 }}>
                    <p className="count">0</p>
                    <img className="comment__icon" src={icons.comment} alt="comment icon" />
                  </Grid>
                </Grid>
                {/* <Grid direction="row" spacing={2} container sx={{width: '10rem', cursor: 'pointer'}}>
                  <Grid item onClick={() => handleColor('bookmark')}>
                    <BookmarkBorderOutlinedIcon style={{fill: bookmarkColorValue,marginTop:'.3rem'}}/>
                  </Grid>
                  <Grid item style={{ paddingTop: 0 }} onClick={() => handleColor('favourite')}>
                    <p className="count">0</p>
                    <FavoriteBorderOutlinedIcon style={{fill: colorValue,margin: 0, }} />
                  </Grid>
                  <Grid item style={{ paddingTop: 0 }}>
                    <p className="count">0</p>
                    <img className="comment__icon" src={icons.comment} alt="comment icon" />
                  </Grid>
                </Grid> */}
              </Stack>

                <Typography sx={{ fontSize: 14 }} color="white" gutterBottom className="roboto__font">
                  {item.user.username}
                </Typography>

                <Typography sx={{ fontSize: 23 }} color="white" gutterBottom className="raleway__font">
                  {item.title}
                </Typography>

                <Typography variant="p" component="div">
                  {/* {post.content} */}
                </Typography>
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', cursor: 'pointer' }} onClick={()=> {
                  history(`/singlepost/${item._id}`)
                  handleClick()
                }} className="raleway__font">
                  Read more &rarr; 
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <Skeleton variant="rectangular" minWidth={275} my={3} height={250} />
          )}  
        </Grid>
      ))}
    </Grid>
    <Stack sx={{display: 'flex', alignItems: 'center'}}>
      <Pagination page={page} onChange={handleChangePage} count={pages} shape="rounded" />
    </Stack>
  </>
  );
}
