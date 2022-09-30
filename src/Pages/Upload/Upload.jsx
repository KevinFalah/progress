import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineCloudUpload, AiOutlinePlus } from "react-icons/ai";
import { Styles } from "./Styles";

function Upload() {
  return (
    <Container className="px-5 mt-5 mb-5">
      <Row>
        <Col md={7}>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="rounded" style={Styles.labelInputFile}>
              <AiOutlineCloudUpload
                style={{ fontSize: "300px", color: "#B3B3B3" }}
              />
              <p className="fs-3">
                <span style={{ color: "#2FC4B2", fontWeight: "bold" }}>
                  Browse
                </span>{" "}
                to choose a file
              </p>
            </Form.Label>
            <Form.Control type="file" placeholder="Password" />
          </Form.Group>
          <Row>
            <Col style={Styles.previewImg}>
                <AiOutlinePlus className="fs-2" style={{color:"#B2B2B2"}}/>
            </Col>
            <Col style={Styles.previewImg}>
                <AiOutlinePlus className="fs-2" style={{color:"#B2B2B2"}}/>
            </Col>
            <Col style={Styles.previewImg}>
                <AiOutlinePlus className="fs-2" style={{color:"#B2B2B2"}}/>
            </Col>
            <Col style={Styles.previewImg}>
                <AiOutlinePlus className="fs-2" style={{color:"#B2B2B2"}}/>
            </Col>
          </Row>
        </Col>

        <Col md={5} className="mt-4">
          <Form>
            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="text"
                placeholder="Title"
                className="mb-3"
                style={{ backgroundColor: "#E7E7E7" }}
                name="email"
                autoFocus
              />
            </Form.Group>

            {/* Password */}
            <div className="form-group mb-5">
              <textarea
                placeholder="Description"
                style={Styles.textarea}
                id="desc"
                name="description"
                rows="6"
                cols="50"
                className="text-muted"
              ></textarea>
            </div>

            <div className="d-flex justify-content-evenly" style={{width:"60%", margin:"auto"}}>
              <Button style={Styles.buttonCancel}>Cancel</Button>
              <Button style={Styles.buttonPost}>Post</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Upload;
