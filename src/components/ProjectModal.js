import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";
import CarouselVideo from "./CarouselVideo";
import Stack from "@mui/material/Stack";

function ProjectModal(props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={props.open}>
        <Stack>
          <Box
            sx={{
              boxShadow: 24,
              p: 4,
              bgcolor: "background.paper",
              maxHeight: "80vh",
              maxWidth: "80vw",
              overflowY: "auto",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {props.primary}
            </Typography>
            <Carousel
              src={props.src
                .filter((item) => item.type === "image")
                .slice(0, props.src.length)}
            />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {props.text}
              <br />
              <CarouselVideo
                src={props.src
                  .filter((item) => item.type === "video")
                  .slice(0, props.src.length)}
              />
              <br />
              {props.details}
            </Typography>
          </Box>
        </Stack>
      </Fade>
    </Modal>
  );
}

export default ProjectModal;
