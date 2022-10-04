import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { AiOutlineCloudUpload, AiOutlinePlus } from "react-icons/ai";
import { useMutation } from "react-query";
import { API } from "../../config/Api";
import { useNavigate, Link } from "react-router-dom";

import { Styles } from "./Styles";

function Upload() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null); //For image preview
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    title: "",
    photo: "",
    description: "",
  });

  const handleChange = (e) => {
    // console.log("punya si ", e.target.name);
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      console.log("tessss");

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      const formData = new FormData();
      formData.set("title", form?.title);
      formData.set("description", form?.description);
      formData.set("photo", form?.photo[0], form.photo[0].name);

      console.log(form);

      const response = await API.post("/post", formData, config);
      console.log(response);

      navigate("/");

      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <Container className="px-5 mt-5 mb-5">
      <Row>
        <Form
          onSubmit={(e) => {
            handleSubmit.mutate(e);
          }}
          className='d-flex gap-5 formUpload'
        >
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

              <Form.Control type="file" name="photo" onChange={handleChange} />
            </Form.Group>
            <Row>
              <Col md={3} style={Styles.previewImg}>
                {preview ? (
                  <div>
                    <img
                      src={preview}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "150px",
                        objectFit: "cover",
                        padding:"0px"
                      }}
                      alt={preview}
                    />
                  </div>
                ) : (
                  <>
                    <AiOutlinePlus
                      className="fs-2"
                      style={{ color: "#B2B2B2" }}
                    />
                  </>
                )}
              </Col>
              {/* <Col style={Styles.previewImg}>
                <AiOutlinePlus className="fs-2" style={{ color: "#B2B2B2" }} />
              </Col>
              <Col style={Styles.previewImg}>
                <AiOutlinePlus className="fs-2" style={{ color: "#B2B2B2" }} />
              </Col>
              <Col style={Styles.previewImg}>
                <AiOutlinePlus className="fs-2" style={{ color: "#B2B2B2" }} />
              </Col> */}
            </Row>
          </Col>

          <Col md={5} className="mt-4">
            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="text"
                placeholder="Title"
                className="mb-3"
                style={{ backgroundColor: "#E7E7E7", border: "2px solid #2FC4B2" }}
                name="title"
                onChange={handleChange}
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
                onChange={handleChange}
                rows="6"
                cols="50"
                className="text-black"
              ></textarea>
            </div>

            <div
              className="d-flex justify-content-evenly"
              style={{ width: "60%", margin: "auto" }}
            >
              <Button as={Link} to='/' style={Styles.buttonCancel}>Cancel</Button>
              <Button type="submit" style={Styles.buttonPost}>
                Post
              </Button>
            </div>
          </Col>
        </Form>
      </Row>
    </Container>
  );
}

export default Upload;
