import React from "react";
import { Box, Typography } from "@mui/material";

function Section({ id, title, children }) {
  return (
    <Box
      id={id}
      sx={{
        // height: "80vh",
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
        bgcolor: "background.paper",
        p: 2,
        m: 2,
        borderRadius: 1,
      }}
    >
      <Box>
        <Typography variant="h3">{title}</Typography>
        {children}
      </Box>
    </Box>
  );
}

export default Section;
