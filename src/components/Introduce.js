import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Introduce() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        HI, I AM WONGSATON KAMPUSAN.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">
            Front End Developer | Control Automation Engineer
          </Typography>
          <Typography variant="body1">
            With a Master's degree in Deep Technology and Intelligent Systems,
            my journey at Mars as an Automation Engineer allowed for hands-on
            expertise in MES, MOM, and Factory IT systems. My focus on
            troubleshooting and risk management has significantly enhanced
            operational reliability and minimized system risks.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            The summary and headlines were created following the plan steps,
            ensuring all requirements were met, and emphasizing the person's
            most recent work experience, education, and core competencies. The
            language used was professional, concise, and inclusive.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Introduce;
