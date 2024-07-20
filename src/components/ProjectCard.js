import React, { Children } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  Avatar,
  CardActionArea,
  CardContent,
  CardMedia,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
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
          // width="100%"
          // height="140"
          src={props.src[0].src}
          alt={props.name}
          style={{ backgroundColor: "white" }}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
          <List sx={{ width: "100%" }}>
            {props.tools.map((tool) => (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={tool.name}
                    src={tool.src}
                    style={{ backgroundColor: "white" }}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="caption">{tool.fullName}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </CardActionArea>

      <ProjectModal
        open={open}
        handleClose={handleClose}
        primary={props.name}
        text={props.description}
        src={props.src}
        tools={props.tools}
        details={props.details}
      />
    </Card>
  );
}

export default ProjectCard;
