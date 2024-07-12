import React from "react";
import { Box, Typography } from "@mui/material";

function Section({ id, title, content }) {
  return (
    <Box
      id={id}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper",
        p: 2,
        m: 2,
        borderRadius: 1,
      }}
    >
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </Box>
    </Box>
  );
}

export default Section;
