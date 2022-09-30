import React, {useContext, useState} from 'react'
import {Modal, Form, Button, Alert} from 'react-bootstrap'
import { useMutation } from 'react-query';
import {API} from '../../config/Api'
import {UserContext} from '../../context/UserContext'
import {useNavigate} from 'react-router-dom'

function ModalLogin({handleClose, show}) {

  const [state, dispatch] = useContext(UserContext)
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const [message, setMessage] = useState(null);

  const {email, password } = form;

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
          'content-type': 'application/json',
        },
      };

             // Data body
             const body = JSON.stringify(form);
             // Insert data user to database
             const response = await API.post('/login', body, config);
             console.log(response)
            
             // Notification
             if (response.data.code === 200) {
               dispatch({
                 type:"LOGIN_SUCCESS",
                 payload: response.data.data
               })
               const alert = (
                 <Alert variant="success" className="py-1">
                   Success
                 </Alert>
               );
               setMessage(alert);
               setForm({
                 email: "",
                 password: "",
               });
               navigate('/')
             } else {
               const alert = (
                 <Alert variant="danger" className="py-1">
                   Failed
                 </Alert>
               );
               setMessage(alert);
             }
          } catch (error) {
            const alert = (
              <Alert variant="danger" className="py-1">
                Failed
              </Alert>
            );
            setMessage(alert);
            console.log(error);
          }
  })


  return (
    <>
        
        <Modal show={show} onHide={handleClose} >
        <Modal.Header className="bg-light border-0" style={{color:"#2FC4B2"}}>
          <Modal.Title className='fs-2 fw-bold'>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <Form onSubmit={(e) => handleSubmit.mutate(e)} >
            {message && message}
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
            
          <Button variant="primary" type="submit" style={{backgroundColor:"#2FC4B2", width:"100%"}} className="text-light fw-bold border-0 " size="lg">
            Login
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className='border-0 mod-fot justify-content-center'>
            <p>Don't have an account ? Klik <span className='fw-bold'>Here</span></p>
        </Modal.Footer>

      </Modal>

    </>
  )
}

export default ModalLogin