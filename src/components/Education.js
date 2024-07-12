import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Paper, Divider } from "@mui/material";

const educationData = [
  {
    degree: "Master of Science in Deep Technology And Intelligent System",
    institution: "NATIONAL INSTITUTE OF DEVELOPMENT ADMINISTRATION",
    location: "Bangkok, Thailand",
    date: "2023",
    description:
      "Completed a independent study the development of an automated frog farming system and weight prediction using Internet of Things technology.",
  },
  {
    degree: "Bachelor of Computer Engineering",
    institution: "RAJAMANGALA UNIVERSITY OF TECHNOLOGY ISAN",
    location: "Sakon Nakhon, Thailand",
    date: "2018",
    description:
      "Completed a project on an E-Document Tracking System for iOS and Android Application.",
  },
  {
    degree: "Vocational Certificate of Electronics",
    institution: "SAKON NAKHON TECHNICAL COLLEGE",
    location: "Sakon Nakhon, Thailand",
    date: "2014",
    description:
      "Acquired foundational knowledge and practical skills in electronics.",
  },
];

function Education() {
  return (
    <Timeline position="alternate">
      {educationData.map((edu, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h2">{edu.date}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            {index < educationData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              elevation={12}
              square={false}
              style={{ padding: "20px 30px" }}
            >
              <Typography variant="subtitle1" component="h1" margin="2px">
                {edu.degree}
              </Typography>
              <Divider component="li"></Divider>
              <Typography variant="body2" component="h2" margin="2px">
                {edu.institution}
              </Typography>
              <Typography variant="caption" margin="2px">
                {edu.location}
              </Typography>
              <Divider component="li"></Divider>
              <Typography variant="body2" margin="2px">
                {edu.description}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default Education;
