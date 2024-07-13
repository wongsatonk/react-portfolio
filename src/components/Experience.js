import { Timeline } from "@mui/lab";
import { Box } from "@mui/material";
import React from "react";
import ExperienceItem from "./ExperienceItem";

const experience = [
  {
    startDate: "09/2023",
    endDate: "01/2024",
    position: "Automation Engineer",
    company: "Mars Petcare",
    location: "Chonburi, Thailand (Remote)",
    definition: "Automation Projects Lead",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_LWMBFc_T2sX5Cf--h2FTwAE8QgQGuxbgg&s",
    responsibilities: [
      "Led automation projects in line with industrial control standards and IT systems.",
      "Trained entry-level engineers in MES, MOM, and Factory IT systems, enhancing team capabilities.",
      "Collaborated with Rockwell and Engineering teams on MES solution architectures and design specifications.",
      "Managed project deliverables, focusing on safety, security, and environmental compliance.",
      "Troubleshooted software to alleviate obstacles preventing functionality.",
    ],
  },
  {
    startDate: "10/2022",
    endDate: "08/2023",
    position: "Reliability Engineer (Automation & Server)",
    company: "Mars Petcare",
    location: "Chonburi, Thailand",
    definition: "Technical Problem Solver",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_LWMBFc_T2sX5Cf--h2FTwAE8QgQGuxbgg&s",
    responsibilities: [
      "Directed technical personnel in the fabrication of testing and test control equipment.",
      "Provided solutions to various technical problems of varying scope and complexity.",
      "Directed technical teams in testing and control equipment development for factory IT systems.",
      "Tested hardware and software within a quality assurance environment before production release.",
      "Created plans for test method validation using research or field observations.",
      "Created technical documents for the education of newly hired employees.",
      "Supported Engineering and Maintenance departments with training and technical support.",
      "Developed detailed technical documents and user guides for technical products.",
      "Evaluated and implemented new technologies to improve automation systems for production.",
    ],
  },
  {
    startDate: "10/2019",
    endDate: "10/2022",
    position: "Systems Engineer",
    company: "Unity Focus Co., Ltd.",
    location: "Chonburi, Thailand",
    definition: "Control System Solution Integrator",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFTJ6s7wLLgaYCku7SICvoTRaoOMyq859JQ&s",
    responsibilities: [
      "Participated in the Chonburi pouch plant phase 3 JUMP project, collecting requirements from R&D, Operations, Maintenance, and Engineering teams to develop MES function including URS, and FDS documents by collaborating with Rockwell Automation.",
      "Provided technical support to external and internal customers.",
      "Created and finalized designs to meet project requirements.",
      "Identified procures and necessary equipment and facilities for characterization of automation systems and applications.",
      "Developed process control system and manufacturing execution system with customers.",
      "Demonstrated leadership skills in managing projects from concept to completion.",
    ],
  },
  {
    startDate: "05/2018",
    endDate: "10/2019",
    position: "Programmer",
    company: "Delsnet Enterprise Co., Ltd.",
    location: "Nonthanuri, Thailand",
    definition: "Solution Provider",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMEy3zdMlIo2OwC0UXVUURaQ8Z0OduEFuPw&s",
    responsibilities: [
      "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
      "Developed web applications for deployment on platforms and sites.",
      "Prepared detailed reports on updates to project specifications, progress, identified conflicts, and team activities.",
      "Incorporated database technologies into coding projects.",
    ],
  },
];

function Experience() {
  return (
    <Box maxWidth="lg">
      <Timeline>
        {experience.map((item) => (
          <ExperienceItem
            startDate={item.startDate}
            endDate={item.endDate}
            position={item.position}
            company={item.company}
            location={item.location}
            definition={item.definition}
            src={item.src}
            responsibilities={item.responsibilities}
          ></ExperienceItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default Experience;
