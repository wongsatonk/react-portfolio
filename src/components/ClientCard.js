import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

function ClientCard(props) {
  return (
    <ImageListItem key={props.img}>
      <img
        srcSet={`${props.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${props.img}?w=248&fit=crop&auto=format`}
        alt={props.title}
        loading="lazy"
      />
      <ImageListItemBar title={props.title} subtitle={props.subtitle} />
    </ImageListItem>
  );
}

export default ClientCard;
