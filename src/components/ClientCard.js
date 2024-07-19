import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

function ClientCard(props) {
  return (
    <ImageListItem key={props.img} style={{ backgroundColor: "white" }}>
      <img
        srcSet={`${props.img}`}
        src={`${props.img}`}
        alt={props.title}
        loading="lazy"
        style={{
          width: "100%",
          maxWidth: 300,
          maxHeight: 200,
          objectFit: "contain",
        }}
      />
      <ImageListItemBar title={props.title} subtitle={props.subtitle} />
    </ImageListItem>
  );
}

export default ClientCard;
