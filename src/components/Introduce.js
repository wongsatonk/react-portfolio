import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ImageList, ImageListItem } from "@mui/material";

const pictures = [
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/451087809_18444999997054723_6056703750782549849_n.jpg?stp=dst-jpegr&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KUiiSLsYmicQ7kNvgEaBl5v&se=-1&_nc_ht=scontent-sea1-1.xx&oh=00_AYDPlHvW9W0j-FrfHXH35dCx36vit_ldJKmxihQ2AlBPJQ&oe=66991B2A",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/438058918_18432929938054723_6555598635891533159_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KsL6CCgpib0Q7kNvgFRYuJA&_nc_ht=scontent-sea1-1.xx&oh=00_AYADm0XB_BpmlSipf_whf_lb7dPi4uQ87nemy6X3_LWmNA&oe=6699386F",
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/39558039_1892090454220426_6402993096631517184_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ca4fef&_nc_ohc=upPMH0OmfFAQ7kNvgEq6rKj&_nc_ht=scontent-sea1-1.xx&oh=00_AYAg3X0cVSNAORwSGfWQtL4pT4ChrRYaEafsGhevMYmI1Q&oe=66BD1A9E",
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/323362580_1502168050289299_849418679592800729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uKS6fuXQbL4Q7kNvgFGLpIE&_nc_ht=scontent-sea1-1.xx&oh=00_AYBYxw7QXRvtAeXw9I0ebcJCUEiWFkUinZGp6-xWdQVd_w&oe=669B7AAD",

    cols: 2,
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/405485175_18398737513054723_6831032979384690460_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f8GBJg5dwvkQ7kNvgHXO_ad&_nc_ht=scontent-sea1-1.xx&oh=00_AYBz8KVDjg9irzXnVAQaxz_ocwp7VhPZStJ5MVYYaPnAWQ&oe=669B8299",

    cols: 2,
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/430051959_18421515460054723_5236181594907898657_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JngiKA7HkJEQ7kNvgE69IUE&_nc_ht=scontent-sea1-1.xx&oh=00_AYCyv_J7Sho1XyZD9eHBehqs7HK-jmb9Yv-qwmXdctWO1w&oe=66993948",

    rows: 2,
    cols: 2,
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/419830361_18408333121054723_6233816486114800167_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9ahO39vDz7AQ7kNvgEckMFd&_nc_ht=scontent-sea1-1.xx&oh=00_AYC9wEX9SGSASfC_6vy6ZBYbd44rQFG4aZNIAf_vQ1Ga6w&oe=669B68DC",
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/60961153_2280383175391150_6437616305473323008_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_ohc=4TuY4IQE6oUQ7kNvgHC0kRP&_nc_ht=scontent-sea1-1.xx&oh=00_AYBsjqhA4iOWlhprf_Xquaou8d9JJoI5X3MfxW3Kteu_-A&oe=66BD0F06",
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/55770084_2201825349913600_7351565718061580288_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ca4fef&_nc_ohc=N-hEubqx_SUQ7kNvgHMNBQd&_nc_ht=scontent-sea1-1.xx&oh=00_AYDfr0gIJhu8aKeJ5O8v8df3X7aR34G4iVgtNZC5WSNgMw&oe=66BD27E9",

    rows: 2,
    cols: 2,
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/367458028_6691348587627898_2305079343257250459_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rw6eVoOG-NsQ7kNvgEC6yC7&_nc_ht=scontent-sea1-1.xx&oh=00_AYAEcUz8ON16vFLdnxM4W6wxoElRTRLIt4BExnhp4IZccQ&oe=669B5E91",
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/353661157_6459327994163293_1734840367448899861_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ENhmTwMp5H0Q7kNvgG2y6_I&_nc_ht=scontent-sea1-1.xx&oh=00_AYCl-tBjJ66PwLEEk7kIpZX1tSFYG3BabFft4oNqbvMN_A&oe=669B7E42",
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/19800719_1426373380792138_7534280561383966721_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=9DSze6Bd8SMQ7kNvgHZTPpU&_nc_ht=scontent-sea1-1.xx&oh=00_AYDuSVtut-S_kNnZQM1kOwquyUIVJuqg5b71ZkGkJ8WGrQ&oe=66BD0F37",

    cols: 2,
  },
];

function Introduce() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container width="100%">
        <Grid item xs={12} md={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            HI, I AM WONGSATON KAMPUSAN.
          </Typography>
          <ImageList
            sx={{ height: "auto" }}
            variant="quilted"
            cols={4}
            rowHeight={120}
          >
            {pictures.map((picture, index) => (
              <ImageListItem
                key={index}
                cols={picture.cols || 1}
                rows={picture.rows || 1}
              >
                <img src={picture.img} alt={`no.${index}`} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
      <Grid>
        <Typography variant="h5" fontFamily="monospace" textAlign="center">
          Front-End Developer | Control Automation Engineer
        </Typography>
      </Grid>
      <Grid container spacing={4} mt={0}>
        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            Eager to contribute to innovative projects as a Front-End Developer
            with a strong focus on React.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            With a Master's degree in Deep Technology and Intelligent Systems,
            my journey at Mars as an Automation Engineer allowed for hands-on
            expertise in MES, MOM, and Factory IT systems. My focus on
            troubleshooting and risk management has significantly enhanced
            operational reliability and minimized system risks.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
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
