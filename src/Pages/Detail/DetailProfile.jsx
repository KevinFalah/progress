import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import DetailLogo from "../../Components/Images/detailProfile.png";
import DetailImage from '../../Components/Images/detailImage.png'
import DetailSmallImage from '../../Components/Images/detailSmallImage.png'
import {Styles} from "./Styles";

function DetailProfile() {
  return (
    <Container className='justify-content-center d-flex flex-column align-items-center' style={{width:"60%"}}>
      <Row className="d-flex align-items-center mt-3" style={{width:"90%"}}>
        <Col md={6} className="d-flex" style={{flex:'1'}}>
          
            <img
              width={60}
              height={60}
              src={DetailLogo}
              style={{ borderRadius: "100%", objectFit: "cover", marginRight:"20px" }}
              alt="user"
            />
            <div>
              <h4>Robo-x landing Page</h4>
              <p>Geralt</p>
            </div>
          </Col>
          <Col md={6} className='justify-content-end d-flex bg-light' style={{gap:"10px"}}>
          <Button style={Styles.buttonFollow}>
            Follow
          </Button>
          <Button style={Styles.buttonHire}>
            Hire
          </Button>
          </Col>
      </Row>

      <Row className="d-flex flex-column align-items-center">

        
        <img src={DetailImage} alt="DetailImgae" className="mt-2 rounded" />

        <img src={DetailImage} alt="DetailSmallImage" className="rounded" style={{width:"150px", marginTop:"20px"}}/>
        </Row>

        <Row className="mt-5 px-5">
          <h5 className="fs-5">✌️<span className="fw-bold">Say Hello</span> <span className="fw-bold" style={{color:"#2FC4B2"}}>geralt@gmail.com</span></h5>
          <p>Super excited to share my new web app interface and elements that I recently worked on. Hope you enjoyed it. Thanks for your likes and comments!</p>
        </Row>
    </Container>
  );
}

export default DetailProfile;
