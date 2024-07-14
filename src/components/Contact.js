import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import ContactCard from "./ContactCard";
import ProfileCard from "./ProfileCard";

function Contact() {
  return (
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <ContactCard />
        <ProfileCard />
      </Stack>
    </Container>
  );
}

export default Contact;
