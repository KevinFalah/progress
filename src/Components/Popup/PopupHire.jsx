import React from 'react'
import PopupImage from '../Images/detailImage.png'
import {Modal, Button} from 'react-bootstrap'

function PopupHire({show, handleClose }) {
  return (
    <>
     <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Thank You!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
            <h3 style={{color:"#469F74", fontWeight:"lighter"}}>We have sent your offer, please wait for the user to accept it</h3>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PopupHire