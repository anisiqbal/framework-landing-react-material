import React from "react";
import Style from "./style";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import arrow from "../../assets/images/arrow.png";


function Cards() {
  const classes = Style();

  const cards = [
    {
      image: image1,
      text:" Easy to search",
      heading: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      arrow: arrow,
    },
    {
      image: image2,
      text: "Improve business insight",
      heading: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      arrow: arrow,
    },
    {
      image: image3,
      text: "Fast as lightning",
      heading: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      arrow: arrow,
    },
    {
      image: image4,
      text: "Grow business",
      heading: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      arrow: arrow,
    },
  ];

  return (
    <>
    <div
    style={{
        backgroundColor:'#f8f9fa'
    }

    }>
    <Container sx={{}}>
      <Grid container spacing={3} >
        {cards.map((value) => {
          return (
            <Grid item xs={12} md={3}>
                <div
                style={{
                    backgroundColor: "#fff",
                   
                    padding: "20px",
                    height: "70%",
                    textAlign: "left",
                    paddingTop: "15%",
                    marginTop:"20%",
                    marginRight: '-15px',
                    // marginBottom: '5%',
                   
                  }}>
              <img src={value.image} className={classes.logo} />
              <Typography variant="text" className={classes.text}>{value.text}</Typography>
              <Typography variant="heading" className={classes.heading}>{value.heading}</Typography>
              <img src={value.arrow} className={classes.arrow} />
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

export default Cards;
