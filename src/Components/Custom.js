import {React,useState} from "react";
import { Form,Button,Modal,Tabs,Tab } from "react-bootstrap";
export function ModalSign() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
    درخواست پروژه
    </Button>
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>اطلاعات گیرنده</Modal.Title>
    <Tabs
    defaultActiveKey="personal"
    id="form-switch"
    className="mb-3"
    fill
    >
    <Tab eventKey="personal" title="شخصی">
    
    </Tab>
    <Tab eventKey="company" title="شرکت">
    </Tab>
    </Tabs>
    </Modal.Header>
    <Modal.Body>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>نام</Form.Label>
    <Form.Control
    type="email"
    placeholder="نام"
    autoFocus
    />
    </Form.Group>
    <Form.Group
    className="mb-3"
    controlId="exampleForm.ControlTextarea1"
    >
    <Form.Label>توضیحات</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
    بستن
    </Button>
    <Button variant="primary" onClick={handleClose}>
    ثبت
    </Button>
    </Modal.Footer>
    </Modal>
    </>
    );
  }
  
  export default ModalSign
