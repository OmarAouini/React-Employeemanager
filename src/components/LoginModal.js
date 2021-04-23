import React from 'react'
import { Form, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import {useState} from "react"
import Button from "react-bootstrap/Button"


const LoginModal = (props) => {

    //show state passed in from header comp
    const [show, setShow] = useState(props.show);

    //passing hide state to header
    const handleClose = (e) => {
        setShow(false);
        props.hide(false);
    }

    const handleSubmit = (e) => {
        if(!props.isLoggedIn) {
            props.login(e);
            setShow(false);
            props.hide(false);
        }
    }
    
    return(
        <Modal
        show={props.show}
        backDrop="static"
        onHide={handleClose}
        keyboard={false}
        >
            <ModalHeader closeButton color="primary">
                <ModalTitle>Login</ModalTitle>    
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        insert a valid Email adress
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text-muted">
                        insert your password
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(value) => handleSubmit(value)}>Submit</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={(e) => handleClose(e)}>
                Close
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default LoginModal