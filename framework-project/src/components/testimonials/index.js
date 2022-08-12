import { Grid, Typography, Container } from "@mui/material";
import React from "react";
import Style from "../testimonials/style";
import timage from "../../assets/images/testimonial1.png";
import image1 from "../../assets/images/left.png";
import image2 from "../../assets/images/right.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import man from '../../assets/images/man.png';
import "./style";

const options = {
  items: 3,
//   nav: true,
//   navText: [
//     `<div className='nav-btn prev-slide'><img src=${image1} /></div>`,
//     `<div className='nav-btn next-slide'><img src=${image2} /></div>`,
//   ],
  rewind: true,
  autoplay: true,
  slideBy: 1,
  dots: true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:3   
    }
  }
//   dotsEach: true,
//   dotData: true,
};

function Testimonials() {
  const classes = Style()

  const testimonialData = [
    {
      text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: man,
      name: "James Anderson",
      company: " Advertising Agency",
    },
    {
      text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: man,
      name: "James Anderson",
      company: " Advertising Agency",
    },
    {
      text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: man,
      name: "James Anderson",
      company: " Advertising Agency",
    },
    {
        text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: man,
        name: "James Anderson",
        company: " Advertising Agency",
      },
      {
        text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: man,
        name: "James Anderson",
        company: " Advertising Agency",
      },
      {
        text: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: man,
        name: "James Anderson",
        company: " Advertising Agency",
      },
     
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "#efefef",
        }}
      >
        <div className="custom-carousel" style={{ margin: "30px 0" }}>
          <Grid container>
            <Grid xs={12}   sx={{ textAlign: "center" }}>
              <Typography variant="h2" className={classes.main}>
                Testimonials
              </Typography>

              <Typography variant="heading" className={classes.mainheading}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Typography>
            </Grid>
          </Grid>

          <OwlCarousel className="owl-theme" loop {...options}>
            {testimonialData.map((value) => {
              return (
                <Container>
                <div className="item"

                style={{
                    marginTop:" 15% ",
                    marginBottom: "15% ",
                    backgroundColor:" #fff",
                    padding:"30px",
                    // width:' 85%',
                }}
                >
            
                    <Grid container  >
                      <Grid item xs={12} md={12}>
                      <div
                      >
                        
                        <Typography  variant="heading" 
                        sx={{
                            fontSize: '13px',
                            fontWeight: '400',
                            color:' #a3a3a3',
                            }}>
                            {value.text}
                        </Typography>

                        <ListItem sx={{left:" -21px !important"}} >
                          <ListItemAvatar>
                            <Avatar src={value.image}  />
                          </ListItemAvatar>
                          <ListItemText
                           
                            secondary={
                              <React.Fragment>
                                <Typography variant="h5"
                                  sx={{
                                    fontSize:' 17px',
                                    fontWeight: '600',
                                    color:' black',
                                     }}
                                //   component="span"
                                //   variant="body2"
                                //   color="text.primary"
                                >
                                  {value.name}
                                </Typography>

                                <Typography variant="heading" sx={{display:'flex'}}>
                                  {value.company}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        {/* <Divider variant="inset" component="li" /> */}
                        </div>
                      </Grid>
                     
                    </Grid>

                 
                </div>
                </Container>
               
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
