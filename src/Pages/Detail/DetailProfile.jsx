import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import DetailLogo from "../../Components/Images/detailProfile.png";
import DetailImage from "../../Components/Images/detailImage.png";
import DetailSmallImage from "../../Components/Images/detailSmallImage.png";
import { Styles } from "./Styles";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../config/Api";

function DetailProfile() {
  const { id } = useParams();

  let { data: users } = useQuery("detailCache", async () => {
    const response = await API.get("/post/" + id);
    return response.data.data;
  });

  console.log("ini response",users)

  return (
    <Container
      className="justify-content-center d-flex flex-column align-items-center"
      style={{ width: "60%" }}
    >
      <Row className="d-flex align-items-center mt-3" style={{ width: "90%" }}>
        <Col md={6} className="d-flex" style={{ flex: "1" }}>
          <img
            width={60}
            height={60}
            src={DetailLogo}
            style={{
              borderRadius: "100%",
              objectFit: "cover",
              marginRight: "20px",
            }}
            alt="user"
          />
          <div>
            <Link className='text-decoration-none text-black' to={`/detail-user/${users?.user?.id}`}>
              <h4>{users?.title}</h4>
            </Link>
            <p>{users?.user?.fullName}</p>
          </div>
        </Col>
        <Col
          md={6}
          className="justify-content-end d-flex bg-light"
          style={{ gap: "10px" }}
        >
          <Button style={Styles.buttonFollow}>Follow</Button>
          <Button as={Link} to={`/hire/${users?.user?.id}`} style={Styles.buttonHire}>Hire</Button>
        </Col>
      </Row>

      <Row className="d-flex flex-column align-items-center">
        <>
        <img src={users?.photo} height={600} style={{width:"600px", objectFit:"cover", borderRadius:"10px"}} alt="DetailImage" className="mt-2" />
        <img
          src={users?.photo}
          alt="DetailSmallImage"
          style={{ width: "150px", marginTop: "20px", borderRadius:"10px" }}
        />
        </>

      </Row>

      <Row className="mt-5 px-5">
        <h5 className="fs-5">
          ✌️<span className="fw-bold">Say Hello</span>{" "}
          <span className="fw-bold" style={{ color: "#2FC4B2" }}>
            {users?.user?.email}
          </span>
        </h5>
        <p>{users?.description}</p>
      </Row>
    </Container>
  );
}

export default DetailProfile;
