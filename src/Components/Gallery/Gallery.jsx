import React from "react";
import { Container } from "react-bootstrap";
import DataDummy from "../../DataDummy.json";
import { Styles } from "./Styles";

function Gallery() {
  return (
    <Container style={Styles.galContainer}>
      <div style={Styles.imgContainer}>
        {DataDummy.map((item) => {
          return (
            <a href="https://assets.codepen.io/12005/windmill.jpg" download  >
              <img src={item.image} style={Styles.image} alt="Gallery" />
            </a>
          );
        })}
      </div>
    </Container>
  );
}

export default Gallery;
  