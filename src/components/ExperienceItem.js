import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Avatar, Grid, List, Typography } from "@mui/material";
import React from "react";

function ExperienceItem(props) {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: "0" }} variant="h5">
        {props.startDate} - {props.endDate}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" sx={{ bgcolor: "white" }}>
          <Avatar
            alt={props.company}
            src={props.src}
            sx={{ height: 50, width: 50 }}
          ></Avatar>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="h1">
          {props.position}
        </Typography>
        <Typography variant="body2" component="h2">
          {props.company} - {props.location}
        </Typography>
        <Typography variant="body2" component="h2" color="secondary" mt={1}>
          {props.definition}
        </Typography>

        <Grid>
          <List>
            {props.responsibilities.map((resposibility) => (
              <Typography variant="caption" component="div">
                • {resposibility}
              </Typography>
            ))}
          </List>
        </Grid>
      </TimelineContent>
    </TimelineItem>
  );
}

export default ExperienceItem;
