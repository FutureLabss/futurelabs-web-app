import React from "react";
import {TextField,Button,Container,Grid,Stack,Box,} from "@mui/material";
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

export default function Article() {
  return (
    <Container sx={{ backgroundColor: "black" }} maxWidth={{}}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={6}>
            <Stack
              spacing={2}
              component="form"
              sx={{
                width: "25ch",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="filled"
                size="small"
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="filled"
                size="small"
              />
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
            </Stack>
          </Grid>
          <Grid item xs={6}>
              <Stack>
              <TextField fullWidth label="fullWidth" id="fullWidth" />
              </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
