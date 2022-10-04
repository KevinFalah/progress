import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import DataDummy from "../../DataDummy.json";
import { Styles } from "./Styles";
import { API } from "../../config/Api";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

function Gallery({gallery}) {


  console.log(gallery);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };

  return (
    <Container style={Styles.galContainer}>
      <div style={Styles.imgContainer}>
        {gallery?.map((item, index) => {
          return (
    <Link to={`/detail/${item.id}`} >

              <img key={index} src={item.photo} style={Styles.image} alt="Gallery" className="galImage"/>
    </Link>

          );
        })}
      </div>

      {/* <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gallery?.map((item, index) => {
          return (
            <Link to={`/detail/${item.id}`}>
              <img
                key={index}
                src={item.photo}
                style={Styles.image}
                alt="Gallery"
                className="galImage"
              />
            </Link>
          );
        })}
      </Masonry> */}
    </Container>
  );
}

export default Gallery;
