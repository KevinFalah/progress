import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DetailUserImg from "../../Components/Images/detailProfile.png";
import DetailImg from "../../Components/Images/detailImage.png";
import { Styles } from "./Styles";
import ExampleWorksImg from '../../Components/Images/exampleImgWorks.png'
import PopupDetailImage from "../../Components/Popup/PopupDetailImage";
import {useQuery} from 'react-query'
import { useParams, Link } from "react-router-dom";
import {API} from '../../config/Api'

function DetailUser() {

  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  let {id} = useParams()
  
  let { data: user } = useQuery("detailCache", async () => {
    const response = await API.get("/user/" + id);
    return response.data.data;
  });

  console.log("response ",user)

  const photoArray = user?.posts

  // console.log(photoArray[0])

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
              <h4 className="fs-5 mt-2">{user?.fullName}</h4>
              <h1 style={{fontSize:"3em", marginTop:"-10px"}}>{user?.greeting}</h1>
            </div>

            <div
              className="d-flex justify-content-start"
              style={{ width: "100%", margin: "50px auto" }}
            >
              <Button style={Styles.buttonFollow}>Follow</Button>
              <Button as={Link} to={`/hire/${id}`} style={Styles.buttonHire}>Hire</Button>
            </div>
          </Col>

          <Col md={7}>
            <img src={user?.posts?.[0].photo} alt="Detail" height={600} style={{width:"600px", objectFit:"cover", borderRadius:"10px", cursor:"pointer"}} onClick={handleShow} />
            <PopupDetailImage show={showModal} handleClose={handleClose} image={user?.posts?.[0].photo}/>
          </Col>
        </Row>

        <Row>
            <h4 className="fs-5 mb-5" >{user?.fullName} Works</h4>
            
            <Col className="d-flex flex-wrap gap-3 mb-5">
            {photoArray?.map((data, index) => {
                return(
                  <img key={index} src={data?.photo} width={200} style={{objectFit:"cover"}} className="rounded" alt="WorksImage" />
                )
              })}
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailUser;
