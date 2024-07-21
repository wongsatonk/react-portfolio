import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselVideo(props) {
  const images = props.src;
  const [activeStep, setActiveStep] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveStep(current),
  };

  return (
    <Box sx={{ flexGrow: 1, pt: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: "auto",
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].name}</Typography>
      </Paper>
      <Slider {...settings}>
        {images.map((step) => (
          <div key={step.name}>
            {step.type === "image" ? (
              <Box
                component="img"
                sx={{
                  alignSelf: "center",
                  height: "auto",
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                  maxHeight: 230,
                  margin: "auto",
                  bgcolor: "white",
                }}
                src={step.src}
                alt={step.alt}
              />
            ) : null}
          </div>
        ))}
      </Slider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      />
    </Box>
  );
}

export default CarouselVideo;
