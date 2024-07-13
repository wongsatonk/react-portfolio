import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import ProjectModal from "./ProjectModal";

function ProjectCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card height="auto" sm={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="140"
          src={props.src}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
      </CardActionArea>

      <ProjectModal
        open={open}
        handleClose={handleClose}
        primary={props.name}
        text={props.description}
        src={props.src}
      />
    </Card>
  );
}

export default ProjectCard;
