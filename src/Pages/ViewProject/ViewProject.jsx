import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineCloudUpload, AiOutlinePlus } from "react-icons/ai";
import { Styles } from "./Styles";
import ViewProjectImg from '../../Components/Images/viewProjectImg.png'

function ViewProject() {
  return (
    <Container className="px-5 mt-5 mb-5">
      <Row>
        <Col md={7}>
            <img src={ViewProjectImg} alt="ViewProject" width='100%' height={500} className='rounded mb-4' styles={{objectFit:"cover"}} />
          <Row>
            <Col style={Styles.previewImg}>
                <img src={ViewProjectImg} alt="SmallViewProject" width='100%' className='rounded' />
            </Col>
            <Col style={Styles.previewImg}>
                {/* <AiOutlinePlus className="fs-2" style={{color:"#B2B2B2"}}/> */}
            </Col>
            <Col style={Styles.previewImg}>
                {/* <AiOutlinePlus className="fs-2" style={{color:"#B2B2B2"}}/> */}
            </Col>
            <Col style={Styles.previewImg}>
                {/* <AiOutlinePlus className="fs-2" style={{color:"#B2B2B2"}}/> */}
            </Col>
          </Row>
        </Col>

        <Col md={5} className="mt-4">
            <p className="text-secondary">all with respect, I thank you for entrusting me as the project implementer, sir, hopefully with the completion of this project we can work together again in the future <br /><br/> Thank you very much</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewProject;
