import React from 'react'
import {useState} from 'react'
import { Modal } from 'react-bootstrap';
import Button from "react-bootstrap/Button"


const ConfirmLogoutModal = (props) => {

    //state passed from header comp
    const [show, setShow] = useState(props.show);
    

    //TODO fix
    //hide passed to header comp
    const handleCancel = () => {
        setShow(false);
        props.hide(false);
    }

    const handleConfirm = (user) => {
        if(props.isLoggedIn) {
            props.logout();
            setShow(false);
            props.hide(false);
        }
    }

    return(
        <Modal.Dialog
        show={props.show}
        backDrop="static"
        onHide={handleCancel}
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Are you sure you want to logout?</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>cancel</Button>
            <Button variant="primary" onClick={handleConfirm}>Logout</Button>
        </Modal.Footer>
        </Modal.Dialog>
    )
}

export default ConfirmLogoutModal