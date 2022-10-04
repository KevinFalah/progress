import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DetailUserImg from "../../Components/Images/detailProfile.png";
import DetailImg from "../../Components/Images/detailImage.png";
import { Styles } from "./Styles";
import ExampleWorksImg from "../../Components/Images/exampleImgWorks.png";
import { UserContext } from "../../context/UserContext";
import { API } from "../../config/Api";
import { useQuery } from "react-query";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  console.log("ini state:", state.user?.user_id);
  console.log("ini state:", state);
  const stateId = state.user?.id;

  let { data: users } = useQuery("seriesCache", async () => {
    const response = await API.get(`/user/${stateId}`);

    const resultResponse = response.data.data;
    console.log("response get", response.data.data);

    return resultResponse;
  });

  const photoArray = users?.posts;
  // console.log("ini photo ",photoArray[0].photo)

  return (
    <div className="pt-5 bgDetailUser">
      <Container>
        <Row className="ps-3">
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
            <div style={{ width: "80%" }}>
              <h4 className="fs-5 mt-2">{users?.fullName}</h4>
              {users?.greeting ? (
                <>
                  <h1 style={{ fontSize: "3em", marginTop: "-5px" }}>
                    {users?.greeting}
                  </h1>
                </>
              ) : (
                <>
                  <p className="text-muted">
                    complete your profile on the edit profile button
                  </p>
                </>
              )}
            </div>

            <div
              className="d-flex justify-content-start"
              style={{ width: "100%", margin: "50px auto" }}
            >
              <Button as={Link} to="/update-profile" style={Styles.buttonHire}>
                Edit Profile
              </Button>
            </div>
          </Col>

          <Col md={7}>
            {photoArray?.[0]?.photo ? (
              <img
                src={photoArray && photoArray?.[0]?.photo}
                alt="Detail"
                width={600}
                height={500}
                className="rounded"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <h1>Upload Something😒</h1>
            )}
          </Col>
        </Row>

        <Row>
          <h4 className="fs-5 mb-5">My Works</h4>

          <Col className="d-flex flex-wrap gap-3 mb-3">
            {photoArray?.map((data, index) => {
              return (
                <img
                  key={index}
                  src={data?.photo}
                  width={200}
                  style={{ objectFit: "cover" }}
                  className="rounded"
                  alt="WorksImage"
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
