import React from "react";
import ClientCard from "./ClientCard";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const clientData = [
  {
    section: "solution-provider",
    name: "Solution Provider",
    items: [
      {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
      },
      {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
      },
      {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik",
      },
      {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
      },
      {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        author: "@hjrc33",
      },
    ],
  },
  {
    section: "industrial-automation",
    name: "Industrial Automation",
    items: [
      {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
      },
      {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
      },
      {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik",
      },
      {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
      },
      {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        author: "@hjrc33",
      },
    ],
  },
];

function Clients() {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        sx={{ boxShadow: "2" }}
        margin={3}
      >
        {clientData.map((client) => (
          <ImageList>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div" color="inherit">
                <Typography
                  variant="h5"
                  margin={1}
                  fontFamily={"monospace"}
                  letterSpacing={4}
                  lineHeight={2}
                >
                  {client.name}
                </Typography>
              </ListSubheader>
            </ImageListItem>
            {client.items.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} subtitle={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        ))}
      </Stack>
    </Container>
  );
}

export default Clients;
