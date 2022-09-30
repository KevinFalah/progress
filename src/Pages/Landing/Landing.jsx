import React, { useState } from "react";
import {Button} from 'react-bootstrap'
import Chess from "../../Components/Images/chess.png";
import HeroImg from "../../Components/Images/imgLanding.png"
import { Styles } from "./Style";
import ModalRegister from "../../Components/Auth/ModalRegister";
import ModalLogin from "../../Components/Auth/ModalLogin";

const Landing = () => {

  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleShowRegister = () => setShowRegister(true)
  const handleCloseRegister = () => setShowRegister(false)
  const handleShowLogin = () => setShowLogin(true)
  const handleCloseLogin = () => setShowLogin(false)

  return (
    <div className="d-flex bgLanding align-items-center justify-content-evenly px-5">
      <div style={{flex:".6"}}>
        <div className="d-flex align-items-center">
          <h1 style={Styles.textChess}>Ways</h1>
          <img src={Chess} alt="Chess" width={120}  height={120} style={Styles.imgChess}/>
        </div>
        <h1 style={Styles.textGallery}>Gallery</h1>

        <h4 className="fs-5">show your work to inspire everyone</h4>
        <p style={{fontSize: "14px"}}>Ways Exhibition is a website design creators gather to share their work with other creators</p>

        <div style={Styles.forBtn} className="justify-content-between d-flex flex-wrap gap-2">
          <Button style={Styles.buttonJoin} onClick={handleShowRegister}>
            Join Now
          </Button>
          <ModalRegister handleClose={handleCloseRegister} show={showRegister}  />
          <Button style={Styles.buttonLogin} onClick={handleShowLogin}>
            Login
          </Button>
          <ModalLogin handleClose={handleCloseLogin} show={showLogin}/>
        </div>
      </div>

      <div>
        <img src={HeroImg} width={500} height={500} alt="WaysGallery" />
      </div>
    </div>
  );
};

export default Landing;
