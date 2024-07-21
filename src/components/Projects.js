import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectListFileName = "project-list.json";
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects/${projectListFileName}`)
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.log("Error fetching the JSON file:", error));
  }, []);
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          padding={4}
          container
          spacing={{ xs: 2, sm: 3, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {projectData.map((project) => (
            <Grid xs={12} sm={4} key={project.id} padding={1}>
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                tools={project.tools}
                src={project.src}
                details={project.details}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;
