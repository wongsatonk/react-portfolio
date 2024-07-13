import React, { useState } from "react";
import Container from "@mui/material/Container";
import SkillCard from "./SkillCard";
import {
  List,
  Paper,
  ListSubheader,
  Stack,
  Button,
  Collapse,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  flexGrow: 1,
}));

const skills = [
  {
    section: "developer",
    name: "Developer",
    data: [
      {
        id: "javascript",
        name: "JavaScript",
        description:
          "Experienced in using JavaScript for developing dynamic and interactive web applications.",
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        id: "csshtml",
        name: "CSS & HTML",
        description:
          "Skilled in crafting responsive and visually appealing web pages using HTML and CSS.",
        src: "https://media.licdn.com/dms/image/D4D12AQHTq7D-iQ39sg/article-cover_image-shrink_600_2000/0/1705409985987?e=2147483647&v=beta&t=VGJgSd5Jd9IFT3V4rTJZznDlejsP_ePUQgIQLWC35KE",
      },
      {
        id: "react",
        name: "React",
        description:
          "Proficient in building scalable web applications using React framework.",
        src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        id: "embarcaderodelphi",
        name: "Embarcadero Delphi",
        description:
          "Experienced in using Embarcadero Delphi for developing robust software solutions.",
        src: "https://d2ohlsp9gwqc7h.cloudfront.net/images/logos/logo-page/made-with-delphi-logo-1024.png",
      },
      {
        id: "python",
        name: "Python",
        description:
          "Utilized Python for scripting, automation, and data analysis tasks.",
        src: "https://banner2.cleanpng.com/20180806/fv/kisspng-python-scalable-vector-graphics-logo-javascript-cl-coderpete-game-development-5b6819307ca155.2506144815335488485105.jpg",
      },
      {
        id: "flutter",
        name: "Flutter",
        description:
          "Developed cross-platform mobile applications using Flutter framework.",
        src: "https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png",
      },
      {
        id: "dbmanagement",
        name: "Database Management",
        description:
          "Managed and optimized database systems for efficient data storage and retrieval.",
        src: "https://img.freepik.com/premium-vector/blue-tube-vector-logo-template-illustration-design-vector-eps-10_822766-9547.jpg",
      },
      {
        id: "aws",
        name: "Amazon Web Service",
        description:
          "Leveraged AWS services for cloud computing and deployment solutions.",
        src: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj",
      },
      {
        id: "iot",
        name: "Internet of Things",
        description:
          "Worked on IoT projects integrating sensors, devices, and software for smart solutions.",
        src: "https://cdn-icons-png.freepik.com/512/6432/6432461.png",
      },
      {
        id: "sourcecontrol",
        name: "Source Control",
        description:
          "Utilized source control tools like Git for version management and collaboration.",
        src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
      },
    ],
  },
  {
    section: "industrial-automation",
    name: "Industrial Automation",
    data: [
      {
        id: "rockwell",
        name: "Rockwell Automation",
        description:
          "Implemented Rockwell Automation solutions for industrial control systems.",
        src: "https://symbols-electrical.getvecta.com/stencil_262/71_rockwell-automation-icon.05b6277eb8.png",
      },
      {
        id: "plc",
        name: "Programmable Logic Controller",
        description:
          "Designed and programmed PLCs for automation and control systems.",
        src: "https://static.vecteezy.com/system/resources/previews/040/815/755/original/plc-icon-programmable-logic-controller-linear-design-vector.jpg",
      },
      {
        id: "scada",
        name: "SCADA",
        description:
          "Developed SCADA systems for real-time monitoring and control of industrial processes.",
        src: "https://cdn.vectorstock.com/i/preview-1x/86/47/hmi-human-machine-interface-line-icon-outline-vector-43658647.jpg",
      },
      {
        id: "mes",
        name: "Manufacturing Execution Systems",
        description:
          "Implemented MES to optimize manufacturing operations and productivity.",
        src: "https://thumbs.dreamstime.com/b/mes-manufacturing-execution-system-acronym-business-concept-background-235588191.jpg",
      },
      {
        id: "pcs",
        name: "Process Control Systems",
        description:
          "Engineered PCS for efficient and reliable control of manufacturing processes.",
        src: "https://cdn-icons-png.flaticon.com/512/6890/6890038.png",
      },
      {
        id: "isoilvega",
        name: "ISOIL VEGA",
        description:
          "Integrated ISOIL VEGA products for precise flow and level measurement.",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9Lansx-A8wFJ7mQ6kd-BSs_tQSV6esdjDw&s",
      },
      {
        id: "fmcaccuload",
        name: "FMC AccuLoad",
        description:
          "Configured FMC AccuLoad systems for accurate and reliable loading operations.",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCr06_ebMKT3f-7UnC0lYAtiURepjl8dH-nw&s",
      },
      {
        id: "emersondanload",
        name: "Emerson DanLoad",
        description:
          "Utilized Emerson DanLoad for precise control and measurement in industrial settings.",
        src: "https://cdn.worldvectorlogo.com/logos/emerson-electric.svg",
      },
    ],
  },
  {
    section: "it",
    name: "IT",
    data: [
      {
        id: "factoryitsystems",
        name: "Factory IT Systems",
        description:
          "Managed IT systems within manufacturing environments for optimal performance.",
        src: "https://i.pinimg.com/originals/81/2a/1b/812a1b2dc63540b2daa2caa89ea9ecdf.jpg",
      },
      {
        id: "icn",
        name: "Industrial Control Network",
        description:
          "Designed and maintained secure and efficient industrial control networks.",
        src: "https://static.vecteezy.com/system/resources/thumbnails/040/867/345/small_2x/technology-logo-vector.jpg",
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        description:
          "Implemented cybersecurity measures to protect industrial control systems.",
        src: "https://static.vecteezy.com/system/resources/previews/002/929/272/non_2x/cyber-security-logo-with-shield-and-check-mark-vector.jpg",
      },
    ],
  },
  {
    section: "other",
    name: "Other",
    data: [
      {
        id: "projectmanagement",
        name: "Project Management",
        description:
          "Led and managed projects ensuring timely delivery and quality outcomes.",
        src: "https://media.istockphoto.com/id/1341104538/vector/project-management-vector-icon-filled-flat-sign-for-mobile-concept-and-web-design-hub-and.jpg?s=612x612&w=0&k=20&c=qI7U2nlmDgv1zV1E2G4lnA6WN8tx9UvHUuSPoDvU_m4=",
      },
      {
        id: "mentorship",
        name: "Mentorship",
        description: "Provided guidance and mentorship to junior team members.",
        src: "https://static.vecteezy.com/system/resources/thumbnails/002/133/097/small/traditional-mentoring-rgb-color-icon-vector.jpg",
      },
      {
        id: "researching",
        name: "Researching",
        description:
          "Conducted research to stay updated with the latest technological advancements.",
        src: "https://static.vecteezy.com/system/resources/previews/007/399/110/original/research-paper-glyph-circle-gradient-background-icon-vector.jpg",
      },
      {
        id: "planning",
        name: "Planning",
        description:
          "Expertise in planning and organizing tasks to achieve project goals.",
        src: "https://cdn-icons-png.freepik.com/512/2037/2037753.png",
      },
      {
        id: "organizing",
        name: "Organizing",
        description:
          "Skilled in organizing workflows and processes for maximum efficiency.",
        src: "https://cdn-icons-png.flaticon.com/512/306/306471.png",
      },
      {
        id: "problemsolving",
        name: "Problem-Solving",
        description:
          "Ability to identify issues, analyze root causes, and develop effective solutions. Involves critical thinking, creativity, and systematic approaches.",
        src: "https://cdn-icons-png.freepik.com/512/2021/2021691.png",
      },
      {
        id: "teamwork",
        name: "Teamwork",
        description:
          "Collaboration with others to achieve common goals. Includes communication, empathy, and leveraging individual strengths for collective success.",
        src: "https://banner2.cleanpng.com/20180328/glq/kisspng-teamwork-logo-clip-art-teamwork-5abb81f6b65495.3312355715222379427468.jpg",
      },
      {
        id: "collaboration",
        name: "Collaboration",
        description:
          "Working together with individuals or groups to achieve shared objectives. Involves communication, compromise, and leveraging diverse perspectives.",
        src: "https://cdn-icons-png.freepik.com/512/1083/1083497.png",
      },
    ],
  },
];

function Skills() {
  const [expandedSections, setExpandSections] = useState({});

  const handleExpand = (section) => {
    setExpandSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        sx={{ boxShadow: "2" }}
      >
        {skills.map((skill) => {
          const isExpanded = expandedSections[skill.section];
          const skillsToShow = skill.data.slice(0, 3);
          const additionalSkills = skill.data.slice(3);

          return (
            <Item key={skills.id}>
              <List
                sx={{ width: "100%" }}
                aria-labelledby={skill.section}
                subheader={
                  <ListSubheader
                    component="div"
                    id={skills.section}
                    color="inherit"
                  >
                    <Typography
                      variant="h5"
                      margin={1}
                      fontFamily={"monospace"}
                      letterSpacing={4}
                      lineHeight={2}
                    >
                      {skill.name}
                    </Typography>
                  </ListSubheader>
                }
              >
                {skillsToShow.map((data) => (
                  <SkillCard
                    id={data.id}
                    primary={data.name}
                    text={data.description}
                    src={data.src}
                  />
                ))}
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  {additionalSkills.map((data) => (
                    <SkillCard
                      key={data.id}
                      primary={data.name}
                      text={data.description}
                      src={data.src}
                    />
                  ))}
                </Collapse>
                {skill.data.length > 3 && (
                  <Button
                    variant="text"
                    onClick={() => handleExpand(skill.section)}
                    color="secondary"
                  >
                    {isExpanded ? "Show Less..." : "Show More..."}
                  </Button>
                )}
              </List>
            </Item>
          );
        })}
      </Stack>
    </Container>
  );
}

export default Skills;
