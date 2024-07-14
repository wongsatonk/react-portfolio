import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

function ProfileCard() {
  const profileUrl =
    "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/418731792_18407780056054723_7052034282738171704_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TNvrnn2BKPsQ7kNvgFJ0l5t&_nc_ht=scontent-sea1-1.xx&oh=00_AYDSDqlK_mD_z51z0Oe_-RGXSZyxmePq4VBZymQojvPdcQ&oe=6698B2AB";
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 140 }} image={profileUrl} title="profile.jpg" />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          Front-End Developer Ready for React Challenges
        </Typography>
        <Typography variant="body2">
          Passionate about building responsive and dynamic web applications with
          React. Seeking new challenges as a Front-End Developer.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="linkedin"
          color="secondary"
          target="_blank"
          href="https://www.linkedin.com/in/wongsaton-kampusan/"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="facebook"
          color="secondary"
          target="_blank"
          href="https://www.facebook.com/aof2thebest"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label="github"
          color="secondary"
          target="_blank"
          href="https://github.com/wongsatonk"
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProfileCard;
