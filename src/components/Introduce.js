import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ImageList, ImageListItem } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const pictures = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

function Introduce() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h2" gutterBottom>
            HI, I AM WONGSATON KAMPUSAN.
          </Typography>
          <ImageList
            sx={{ height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {pictures.map((picture) => (
              <ImageListItem
                key={picture.img}
                cols={picture.cols || 1}
                rows={picture.rows || 1}
              >
                <img
                  {...srcset(picture.img, 121, picture.rows, picture.cols)}
                  alt={picture.title}
                  loading="lazy"
                ></img>
              </ImageListItem>
            ))}
          </ImageList>
          <Typography variant="h5">
            Front End Developer | Control Automation Engineer
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            With a Master's degree in Deep Technology and Intelligent Systems,
            my journey at Mars as an Automation Engineer allowed for hands-on
            expertise in MES, MOM, and Factory IT systems. My focus on
            troubleshooting and risk management has significantly enhanced
            operational reliability and minimized system risks.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            The summary and headlines were created following the plan steps,
            ensuring all requirements were met, and emphasizing the person's
            most recent work experience, education, and core competencies. The
            language used was professional, concise, and inclusive.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Introduce;
