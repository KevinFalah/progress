import React from 'react'
import {Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { Dropdown } from "react-bootstrap";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import {BsJournalBookmarkFill} from 'react-icons/bs'
import LogoWaysGallery from '../Components/Images/logoWaysGallery.png'
import profileDropdown from '../Components/Images/profileDropdown.png'
import {UserContext} from '../context/UserContext'
import { useContext } from 'react';
import ProfileUser from '../Components/Images/detailProfile.png'

function Navbar() {

  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)

  const handleLogout = () => {
    console.log(state)
    dispatch({
        type: "LOGOUT_SUCCESS"
    }) 
    navigate("/auth")
}

  return (
 <nav className="navbar navbar-expand-lg bg-light navbarshad sticky-top" style={{borderBottom:"2px solid #E1E1E1"}}>
    <div className="container-fluid px-5">
      <button
        className="navbar-toggler bg-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="flex-grow-1 d-none d-sm-block">
          <Link to="/">
            <img src={LogoWaysGallery} alt="Dumbflix" />
          </Link>
        </div>
        <div className='d-flex align-items-center'>
        <Button as={Link} to='/upload' variant="primary" style={{backgroundColor:"#2FC4B2", height:"30px"}} className="text-light border-0 px-4 me-3" size="sm">
            Upload
          </Button>
          
            <Dropdown>
              <Dropdown.Toggle variant="dark" style={{backgroundColor:"white", border:"none"}} id="dropdown-basic">
                <img
                  width={40}
                  height={40}
                  src={ProfileUser}
                  style={{ borderRadius: "100%", objectFit: "cover" }}
                  alt="user"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark" style={{backgroundColor: "white", boxShadow:"1px 2px 6px rgba(0, 0, 0, 0.185)", border:"none"}}>
                <Dropdown.Item as={Link} to="/profile" className='fw-bold text-dark'>
                  <FaUser className="ms-2 me-1 fs-4" style={{color:"#2FC4B2"}} />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/order" className='fw-bold text-dark'>
                  <BsJournalBookmarkFill className="ms-2 fs-4" style={{color:"#00E016"}}/> Order
                </Dropdown.Item>
                <Dropdown.Divider className="bg-light dropDivid" />
                <Dropdown.Item href="#" className='fw-bold text-dark' onClick={handleLogout}>
                  <FaSignOutAlt className="text-danger ms-2 fs-4" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar