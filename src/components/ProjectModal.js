import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";
import { Stack } from "@mui/material";

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
            <Carousel src={props.src} />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {props.text}
              <br />
              {/* <video controls>
                <source src={props.src[7]} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
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
