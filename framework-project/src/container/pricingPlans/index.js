import React from "react";
import Style from "./style";
import CheckIcon from "@mui/icons-material/Check";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function pricingPlans() {
  const classes = Style();

  const pricingPlans = [
    {
      h4: "Basic",
      h5: "$19.99",
      billingCycle: "month",
      heading:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      points: [
        "Vokalia and Consonantia",
        "Bookmarksgrove right at the coast",
        "Semantics a large language ocean",
      ],
    },
    {
      h4: "Standard",
      h5: "$299.99 ",
      billingCycle: "month",
      heading:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      points: [
        "Vokalia and Consonantia",
        "Bookmarksgrove right at the coast",
        "Semantics a large language ocean",
      ],
    },
    {
      h4: "Advanced",
      h5: "$799.99",
      billingCycle: "year",
      heading:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      points: [
        "Vokalia and Consonantia",
        "Bookmarksgrove right at the coast",
        "Semantics a large language ocean",
      ],
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "#f8f9fa",
        }}
      >
        <Container sx={{}}>
          <Grid container spacing={3}>
            {pricingPlans.map((value, i) => {
              return (
                <Grid item xs={12} md={3} key={i}>
                  <div
                    style={
                      {
                        //   backgroundColor: "#fff",
                        //   padding: "20px",
                        //   height: "70%",
                        //   textAlign: "left",
                        //   paddingTop: "15%",
                        //   marginTop: "20%",
                        //   marginRight: "-15px",
                        // marginBottom: '5%',
                      }
                    }
                  >
                    <Typography variant="h4">{value.h4}</Typography>

                    <Typography variant="h5">
                      {value.h5}
                      <span>/{value.billingCycle}</span>
                    </Typography>

                    <Typography variant="heading">{value.heading}</Typography>

                    { value.points.map((point, j) => {
                      return (
                        <Grid item xs={12} md={12} key={j}>
                            <span><CheckIcon /></span>
                            <Typography variant="heading">{point}</Typography>
                        </Grid>
                      );
                    })}
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default pricingPlans;
