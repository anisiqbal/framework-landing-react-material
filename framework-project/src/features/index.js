import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import Style from "./style";

import feature1 from "../assets/images/features.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";
import { Container } from "@mui/system";

function Features() {
  const classes = Style();
  const feature = [
    {
      image: feature1,
      text: "How is your site performing?",
      heading:
        " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large  language ocean.",
      button: " READ MORE",
    },
    {
      image: feature2,
      text: "Smart Site Conversion",
      heading:
        " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large  language ocean.",
      button: " READ MORE",
    },
    {
      image: feature3,
      text: "Speed Site Increase Ranks",
      heading:
        " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large  language ocean.",
      button: " READ MORE",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          paddingBottom: "5%",
        }}
      >
        <Grid container>
          <Grid xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h2" className={classes.main}>
              Features
            </Typography>

            <Typography variant="heading" className={classes.mainheading}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
          </Grid>
        </Grid>

        {feature.map((value) => {
          return (
            <Container>
              <Grid container marginTop="8%">
                <Grid item xs={12} md={6}>
                  <img src={value.image} className={classes.image} />
                </Grid>

                <Grid item xs={12} md={6}>
                  <div
                    style={{
                      paddingLeft: "20%",
                      marginTop: "35px",
                    }}
                  >
                    <Typography variant="heading" className={classes.text}>
                      {value.text}
                    </Typography>

                    <Typography variant="heading" className={classes.heading}>
                      {value.heading}
                    </Typography>

                    <Button variant="contained">{value.button}</Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          );
        })}
      </div>
    </>
  );
}

export default Features;
