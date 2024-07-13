import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "iot",
    name: "Internet Of Things",
    description:
      "Aquatic frog using MQTT and Flutter framework, provided frogs' weight prediction using CNN algorithm",
    src: "/avatar/profile.jpg",
  },
  {
    id: "e-document-tracking",
    name: "E-Document Tracking System",
    description:
      "Electronic document tracking system on iOS and Android using Embacadero Delphi and MSSQL",
    src: "/avatar/profile.jpg",
  },
];

function Projects() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          padding={4}
          container
          spacing={{ xs: 2, sm: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {projects.map((project) => (
            <Grid xs={4} sm={4} md={4} key={project.id} padding={1}>
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                src={project.src}
              ></ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;
