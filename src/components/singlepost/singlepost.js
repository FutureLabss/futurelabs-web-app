import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AvatarGroup from '@mui/material/AvatarGroup';
  
export default function Singlepost() {
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
        <Grid item xs={6} sx={{ textAlign: 'center'}} md={2}>
          <h5 >Technology</h5>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center'}} md={2}>
          <h5 >Investment</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center'}} md={2}>
          <h5>Startups</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center'}} md={2}>
          <h5 > Health</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center'}} md={2}>
          <h5> Business</h5>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center'}} md={12} mt={5}>
          <h1>The Coca-Cola Strategy</h1>
        </Grid>
      </Grid>
    <Grid item xs={12} p={1} px={{md:25}}>
    <Stack direction="row" justifyContent="space-between "mb={5}>
        
    <AvatarGroup max={4}>
    <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1638887604/Ellipse_4_bvdgwu.png" />
     <h5>Ezekiel Simon</h5>
     
        
     </AvatarGroup >
      <Avatar
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 56, height: 56 }}
    />
    </Stack>
        </Grid>
      <Grid className="text-center" item xs={12}>
        <img
          className="imgsss"
          src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1635348411/priscilla-du-preez-XkKCui44iM0-unsplash_1_pd3v8t.png"
          alt=""
        />
        <Grid container-fluid item xs={12} mt={5} mb={5} >
        <Box sx={{ textAlign: 'center', m: 1 }}>
           
            Coca-cola focuses on improving the community relationships and
            increasing thhier happiness,that positively reflects on thier public
            image,<br/> resulting in customer and revenue rise. Coca-cola focuses on
            improving the community relationships and increasing thhier
            happiness,that<br/> positively reflects on thier public image, resulting
            in customer and revenue rise. Coca-cola focuses on improving the
            community relationships and<br/> increasing thhier happiness,that
            positively reflects on thier public image, resulting in customer and
            revenue rise.Coca-cola focuses on improving<br/> the community
            Coca-cola focuses on improving the community relationships and
            increasing thhier happiness,that positively reflects on thier public
            image,<br/> resulting in customer and revenue rise. Coca-cola focuses on
            improving the community relationships and increasing thhier
            happiness,that<br/> positively reflects on thier public image, resulting
            in customer and revenue rise. Coca-cola focuses on improving the
            community relationships and<br/> increasing thhier happiness,that
            positively reflects on thier public image, resulting in customer and
            revenue rise.Coca-cola focuses on improving<br/> the community
            Coca-cola focuses on improving the community relationships and
            increasing thhier happiness,that positively reflects on thier public
            image,<br/> resulting in customer and revenue rise. Coca-cola focuses on
            improving the community relationships and increasing thhier
            happiness,that<br/> positively reflects on thier public image, resulting
            in customer and revenue rise. Coca-cola focuses on improving the
            community relationships and<br/> increasing thhier happiness,that
            positively reflects on thier public image, resulting in customer and
            revenue rise.Coca-cola focuses on improving<br/>
            Coca-cola focuses on improving the community relationships and
            increasing thhier happiness,that positively reflects on thier public
            image,<br/> resulting in customer and revenue rise. Coca-cola focuses on
            improving the community relationships and increasing thhier
            happiness,that<br/> positively reflects on thier public image, resulting
            in customer and revenue rise. Coca-cola focuses on improving the
            community relationships and<br/> increasing thhier happiness,that
            positively reflects on thier public image, resulting in customer and
            revenue rise.Coca-cola focuses on improving<br/> the community
            Coca-cola focuses on improving the community relationships and
            increasing thhier happiness,that positively reflects on thier public
            image,<br/> resulting in customer and revenue rise. Coca-cola focuses on
            improving the community relationships and increasing thhier
            happiness,that<br/> positively reflects on thier public image, resulting
            in customer and revenue rise. Coca-cola focuses on improving the
            community relationships and<br/> increasing thhier happiness,that
            positively reflects on thier public image, resulting in customer and
            revenue rise.Coca-cola focuses on improving<br/> the community
            Coca-cola focuses on improving the community relationships and
            increasing thhier happiness,that positively reflects on thier public
            image,<br/> resulting in customer and revenue rise. Coca-cola focuses on
            improving the community relationships and increasing thhier
            happiness,that<br/> positively reflects on thier public image, resulting
            in customer and revenue rise. Coca-cola focuses on improving the
            community relationships and<br/> increasing thhier happiness,that
            positively reflects on thier public image, resulting in customer and
            revenue rise.Coca-cola focuses on improving<br/>
           
            </Box>
        </Grid>
       
      </Grid>
    </>
  );
}
