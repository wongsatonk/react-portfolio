import React, { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

function Clients() {
  const clientListFileName = "client-list.json";
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/clients/${clientListFileName}`)
      .then((response) => response.json())
      .then((data) => setClientData(data))
      .catch((error) => console.log("Error fetching the JSON file:", error));
  }, []);

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
              <ClientCard
                img={item.img}
                title={item.title}
                subtitle={item.author}
                alt={item.title}
              />
            ))}
          </ImageList>
        ))}
      </Stack>
    </Container>
  );
}

export default Clients;
