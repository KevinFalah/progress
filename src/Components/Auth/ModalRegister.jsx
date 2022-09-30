import React, {useState} from 'react'
import {Modal, Form, Button, Alert} from 'react-bootstrap'
import {useMutation} from 'react-query'
import {API} from '../../config/Api'

function ModalRegister({handleClose, show}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const [message, setMessage] = useState(null);


  const {email, password, fullName} = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      // Configuration Content-type
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
        // Data body
      const body = JSON.stringify(form);
      // Insert data user to database
      // if(form.email === "" || form.password === ""){
      //   const alert = (
      //     <Alert variant="danger" className="py-1">
      //       All Fields Is Required
      //     </Alert>
      //   );
      //   setMessage(alert)
      //   return;
      // }
        const response = await API.post('/register', body, config);
      
     
        console.log(response)
      // Notification
      if (response.status === 200) {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);

        setForm({
          email: "",
          password: "",
          fullName: "",
        });

      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);

      }
      handleClose()
    }catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      console.log(error);
    }
  });

  return (
    <>
        
        <Modal show={show} onHide={handleClose} >
        <Modal.Header className="bg-light border-0" style={{color:"#2FC4B2"}}>
          <Modal.Title className='fs-2 fw-bold'>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
        {message && message}

          <Form onSubmit={(e) => handleSubmit.mutate(e)} method="POST">
            
            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                className="mb-3"
                style={{backgroundColor: "#E7E7E7"}}
                name="email"
                onChange={handleChange}
                autoFocus
              />
              </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-3"
                style={{backgroundColor: "#E7E7E7"}}
                name="password"
                onChange={handleChange}

              />
              </Form.Group>

            {/* Fullname */}
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Control
                type="text"
                placeholder="Fullname"
                className="mb-3"
                style={{backgroundColor: "#E7E7E7"}}
                name="fullName"
                onChange={handleChange}

              />
              </Form.Group>
            
          <Button variant="primary" type="submit" style={{backgroundColor:"#2FC4B2", width:"100%"}} className="text-light fw-bold border-0 " size="lg">
            Register
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className='border-0 mod-fot justify-content-center'>
            <p>Already have an account ? Klik <span className='fw-bold'>Here</span></p>
        </Modal.Footer>

      </Modal>

    </>
  )
  }

export default ModalRegister