import {
  Avatar,
  ListItem,
  ListItemAvatar,
  Typography,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";
import React from "react";

function SkillCard(props) {
  return (
    <Container>
      <Divider variant="inset"></Divider>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.primary} src={props.src}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.primary}
          secondary={
            <Typography
              sx={{ display: "block", maxWidth: 400 }}
              component="span"
              variant="body2"
            >
              {props.text}
            </Typography>
          }
        ></ListItemText>
      </ListItem>
    </Container>
  );
}

export default SkillCard;
