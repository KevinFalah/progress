import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DetailUserImg from "../../Components/Images/detailProfile.png";
import DetailImg from "../../Components/Images/detailImage.png";
import { Styles } from "./Styles";
import ExampleWorksImg from '../../Components/Images/exampleImgWorks.png'
import PopupDetailImage from "../../Components/Popup/PopupDetailImage";

function DetailUser() {

  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  return (
    <div className="pt-5 bgDetailUser">
      <Container>
        <Row>
          <Col md={5}>
            <img
              width={60}
              height={60}
              src={DetailUserImg}
              style={{
                borderRadius: "100%",
                objectFit: "cover",
                marginRight: "20px",
              }}
              alt="user"
            />
            <div style={{width:"80%"}}>
              <h4 className="fs-5 mt-2">Geralt</h4>
              <h1 style={{fontSize:"3em", marginTop:"-10px"}}>Hey, Thanks for Looking</h1>
            </div>

            <div
              className="d-flex justify-content-start"
              style={{ width: "100%", margin: "50px auto" }}
            >
              <Button style={Styles.buttonFollow}>Follow</Button>
              <Button style={Styles.buttonHire}>Hire</Button>
            </div>
          </Col>

          <Col md={7}>
            <img src={DetailImg} alt="Detail" width={600} className="rounded" onClick={handleShow} style={{cursor:"pointer"}} />
            <PopupDetailImage show={showModal} handleClose={handleClose} />
          </Col>
        </Row>

        <Row>
            <h4 className="fs-5 mb-5" >Geralt Works</h4>
            
            <Col className="d-flex flex-wrap gap-3">
              <img src={ExampleWorksImg} width={200} className="rounded" alt="WorksImage" />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailUser;
