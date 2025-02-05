import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUser } from "react-icons/fa";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





const Header=()=>{

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
           <div id="header">

           <Container>
          <Row>
              <Col md={2}>1 of 1</Col>
              <Col md={8}>
              <h1> Welcome To My Shopping Site</h1>
              
              </Col>
              <Col md={2}>

              <a href='#' onClick={handleShow}>
              <FaUser />
              </a>
              
               
              </Col>
      </Row>
    </Container>
            
           </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
        </>
    )
}

export default Header;