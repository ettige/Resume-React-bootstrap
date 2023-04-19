import React from 'react'
import ModalSign from './Custom'
import { Container,Row,Col,Image,Card,Button } from 'react-bootstrap'
import { CarosuelResume } from './Custom'
const body = () => {
  return (
    <>
    <section className='about bg-dark text-light' id='About'>
    <Container className='py-4 pb-0'>
    <Row className='justify-content-between flex-md-row flex-column'>
    <Col className='text-center text-md-end'>
    <h2>محمد لطیفی</h2>
    <p>محمد لطیفی با نام مستعار <span className='text-primary'>Strong</span> <span className='text-warning'>برنامه نویس وب</span> </p>
    <ModalSign />
    </Col>
    <Col className='d-none d-lg-block '>
    <Image fluid src='images/undraw_coding_re_iv62.svg' height={300}/>
    </Col> 
    </Row>
    </Container>
    </section>
    
    <section className='py-4 d-none d-lg-block'>
    <Container>
    <CarosuelResume />
    </Container>
    </section>
    
    
    <section className="bg-light py-3" id='Project'>
    <Container>
    <Row className='flex-md-row flex-column gap-3'>
    <Col>
    <Card bg='dark' text='light'>
    <Card.Img src='./images/projects/current.png' height={300} />
    <Card.Body>
    <Card.Title>طراحی وبسایت با <span className="text-primary">React-Bootstrap</span></Card.Title>
    <Card.Text>
    وبسایت با استفاده از <span className="text-danger">React-bootstrap</span>
    </Card.Text>
    <Button variant='secondary' size='lg'>بازدید</Button>
    </Card.Body>
    </Card>
    </Col>
    
    <Col>
    <Card bg='dark' text='light'>
    <Card.Img src='./images/projects/current.png' height={300} />
    <Card.Body>
    <Card.Title>وبسایت <span className="text-info">Bootstrap</span></Card.Title>
    <Card.Text>
    طراحی وبسایت با استفاده از <span className="text-danger">Bootstrap</span>
    </Card.Text>
    <Button variant='secondary' size='lg'>بازدید</Button>
    </Card.Body>
    </Card>
    </Col>
    
    <Col>
    <Card bg='light' text='dark'>
    <Card.Img src='./images/projects/Resume Old.png' height={300} />
    <Card.Body>
    <Card.Title> رزومه قدیمی</Card.Title>
    <Card.Text>
    طراحی شده با <span className='text-danger'>HTML,CSS,JS</span>
    </Card.Text>
    <Button variant='secondary' size='lg'>بازدید</Button>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </section>
    </>
    
    )
  }
  
  export default body
