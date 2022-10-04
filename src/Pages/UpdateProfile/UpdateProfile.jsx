import React from 'react'
import {
  FaEnvelope,
  FaFemale,
  FaMale,
  FaMapMarked,
  FaPhone,
  FaRegMoneyBillAlt,
  FaUserCircle,
  FaCamera
} from "react-icons/fa";
import {Container, Row, Col, Card, Button, Form, Image, Stack} from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../context/UserContext'
import {useMutation} from 'react-query'
import ProfileUser from '../../Components/Images/detailProfile.png'
import {API} from '../../config/Api'

function UpdateProfile() {

    const [state, dispatch] = useContext(UserContext)
    console.log("ini state:", state.user.user_id)
    const stateId = state.user.user_id

    const navigate = useNavigate()

  const [form, setForm] = useState({
    greeting:"",
    fullName:""
  });

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
             const response = await API.patch(`/user/${stateId}`, body, config);
             console.log(response)
            navigate('/profile')
    } catch (error) {
            console.log(error);
    }
  })

  return (
    <Container>
      <Row className='mt-5 ms-5 me-5'>
        <Col>
        
          <Form.Group>
            {/* <span className="mt-5 mb-3 box d-flex justify-content-center align-items-center">
              <a href="#" class="title"><b>Upload</b></a>Your Best Art
            </span> */}
            <label htmlFor="photo-upload" className="custom-file-upload fas mt-5 mb-3 box d-flex justify-content-center align-items-center">
                <div className="img-wrap img-upload" >
                  <a href="#" class="title"><b>Upload</b></a>Your Best Art
                </div>
                <input id="photo-upload" type="file"
                // onChange={onChange} 
                /> 
              </label>
          </Form.Group>
        </Col>

        <Col className='mt-5' align='center'>
          <Form className='form1' onSubmit={(e) => handleSubmit.mutate(e)}>
            <Stack>
              <label htmlFor="photo-upload" className="custom-file-upload fas round mb-3" style={{cursor:"pointer"}}>
                <div className="img-wrap img-upload" >
                    {/* <FaCamera className='fs-1 text-secondary' /> */}
                    <img src={ProfileUser} alt="" width='100%' />
                </div>
                <input id="photo-upload" type="file"
                // onChange={onChange} 
                /> 
              </label>
              {/* Greeting */}
              <Form.Group className="mb-2 formC" controlId="greeting">
                <Form.Control
                  type="text"
                  placeholder="Greeting"
                  className="bg-light text-black"
                  name="greeting"
                  onChange={handleChange}
                  autoFocus
                />
              </Form.Group>

              {/* Full Name */}
              <Form.Group className="mb-3 formC" controlId="fullName">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="bg-light text-black"
                  name="fullName"
                  onChange={handleChange}
                />
              </Form.Group>
            </Stack>
              
            <Button type='submit' className='btn1 mx-auto' size="sm">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default UpdateProfile