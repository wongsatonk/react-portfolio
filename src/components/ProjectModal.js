import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ProjectModal(props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {props.primary}
          </Typography>
          {/* <CardMedia
            component="img"
            image={props.src}
            alt={props.primary}
            height={200}
          /> */}
          <Carousel></Carousel>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {props.text}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ProjectModal;
