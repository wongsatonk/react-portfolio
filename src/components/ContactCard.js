import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const handleEmailClick = () => {
  window.location.href = "mailto:wongsatonkampusan@gmail.com";
};

const handlePhoneClick = () => {
  window.location.href = "tel:+14255424802";
};

const handleLocationClick = () => {
  window.open("https://www.google.com/maps?q=Seattle,+WA", "_blank");
};

function ContactCard() {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Get in touch with me.
        </Typography>

        <Box display="flex" alignItems="center">
          <IconButton onClick={handleEmailClick}>
            <EmailIcon color="secondary" />
          </IconButton>
          <Typography variant="body1" component="div">
            wongsatonkampusan@gmail.com
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton onClick={handlePhoneClick}>
            <PhoneIcon color="secondary" />
          </IconButton>
          <Typography sx={{ mb: 1.5, fontWeight: "medium" }}>
            +1 (425) 542-4802
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton onClick={handleLocationClick}>
            <LocationOnIcon color="secondary" />
          </IconButton>
          <Typography variant="body2">Seattle, WA</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ContactCard;
