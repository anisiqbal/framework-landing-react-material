import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Style from "./style";

function Banner() {
  const classes = Style();
  return (
    <>
      <div
        style={{
          backgroundColor: "#4877fb",
          paddingBottom:' 10%',
          marginTop: '-48px',
        }}
      >
        <Container>
          <Grid container sx={{paddingTop:'10%'}}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className={classes.bannerh3}>
                We are a group of financial specialists
              </Typography>

              <Typography variant="heading" className={classes.bannerheading}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Typography>

              <Button variant="contained" className={classes.bannerbtn}>
                See Our Services
              </Button>
            </Grid>

            <Grid item xs={12} md={6} sx={{ maxWidth: "30px" }}>
              <iframe
                className={classes.frame}
                src="https://www.youtube.com/embed/y881t8ilMyc"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Banner;
