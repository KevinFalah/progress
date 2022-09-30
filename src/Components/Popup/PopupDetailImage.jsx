import React from 'react'
import PopupImage from '../Images/detailImage.png'
import {Modal, Button} from 'react-bootstrap'

function PopupDetailImage({show, handleClose }) {
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
            Art
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
            <img src={PopupImage} alt="PopupArt" width='100%' className='rounded' style={{objectFit:"cover"}} />
            <Button style={{backgroundColor:'#0ACF83', border:"none", marginTop:"15px", padding:"5px 15px"}}>
                Download
            </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PopupDetailImage