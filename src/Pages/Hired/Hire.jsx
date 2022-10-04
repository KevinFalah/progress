import React, { useState } from "react";
import { Container, Form, Button, Col, Row, Alert } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../../config/Api";
import PopupHire from "../../Components/Popup/PopupHire";

function Hire() {
  let {id} = useParams()
  const [form, setForm] = useState({
    title: "",
    descriptionjob: "",
    startproject:"",
    endproject:"",
    price:"",
    orderto_id: parseInt(id)
  });

  const [showPopup, setShowPopup] = useState(false)

  const handleShow = () => setShowPopup(true)
  const handleClose = () => setShowPopup(false)


  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log("punya si ", e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = useMutation(async (e) => {
    try {
      e.preventDefault();
      console.log("tessss");

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      // const formData = new FormData();
      // formData.set("title", form?.title);
      // formData.set("descriptionjob", form?.descriptionjob);
      // formData.set("startproject", form?.startproject);
      // formData.set("endproject", form?.endproject);
      // formData.set("price", form?.price);
      // formData.set("orderto_id", form?.orderto_id);


      console.log(form);

      const body = JSON.stringify(form);

      const response = await API.post("/hired", body, config);
      console.log(response);

      handleShow()
      setTimeout(() => {
        navigate("/");
      }, 2500)

    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Wrong Input
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <Container className="my-5">
      <Form
        onSubmit={(e) => {
          handleOrder.mutate(e);
        }}
      >
        {message && message}
        <Form.Group className="mb-4 form formC" controlId="formTitle">
          <Form.Control
            onChange={handleChange}
            name="title"
            type="title"
            placeholder="Title"
          />
        </Form.Group>

        <Form.Group className="mb-4 form formC" controlId="formDesc">
          <Form.Control
            onChange={handleChange}
            name="descriptionjob"
            as="textarea"
            placeholder="Description Job"
            rows={5}
          />
        </Form.Group>

        <Form.Group className="mb-4 form" controlId="formProject">
          <Row>
            <Col>
              <Form.Control
                onChange={handleChange}
                name="startproject"
                type="date"
                className="formC"
                placeholder="Start Project"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={handleChange}
                name="endproject"
                type="date"
                className="formC"
                placeholder="End Project"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-4 form formC" controlId="formPrice">
          <Form.Control
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="Price"
          />
        </Form.Group>

        <Form.Group align="center" className="mt-4">
          <Button as={Link} to="/" className="btn2 mt-5" size="sm">
            Cancel
          </Button>
          <Button type="submit" className="btn1 ms-2 mt-5" size="sm">
            Bidding
          </Button>
        <PopupHire show={showPopup} handleClose={handleClose} />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Hire;
