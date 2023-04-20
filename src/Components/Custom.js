import {React,useState,useRef} from "react";
import { Form,Button,Modal,Tabs,Tab,Carousel, Container,Row,Col } from "react-bootstrap";

export function CarosuelResume(){
  const picHeight=500;
  const picWidth=800;
  return(
    <Container>
    <Carousel variant="dark" fade>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="images/Projects/Resume Old.png"
    width={picWidth}
    height={picHeight}
    alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="images/Projects/current.png"
    width={picWidth}
    height={picHeight}
    alt="Second slide"
    />
    
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="images/Projects/current.png"
    width={picWidth}
    height={picHeight}
    alt="Third slide"
    />
    
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </Container>
    );
  }
  
  const provincesRaw=[
    {id:1,name:"گیلان"},
    {id:2,name:"تهران"},
  ]
  const citiesRaw=[
    { id:1,provinceId:1,name:"شاندرمن"},
    {id:2,provinceId:1,name:"ماسال"},
    {id:3,provinceId:1,name:"رشت"},
    {id:4,provinceId:1,name:"ماسوله"},
    {id:5,provinceId:2,name:"تهران"},
    {id:6,provinceId:2,name:"کرج"}
    
  ]
  const Group=(props)=>{
    return(
      <Form.Group className="mb-3" controlId={props.name}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
      {...props}
      placeholder={props.label}
      />
      </Form.Group>
      );
    }
    const Select=(props)=>{
      console.log(props.name,!!props.handle);
      return(
        <Form.Group className="mb-3" controlId={props.name}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Select
        type={props.type?props.type:""}
        as={props.as?props.as:"input"}
        name={props.name}
        onChange={props.handle?props.handle:()=>{}}
        aria-label={props.name}
        >
        {props.array.map(sel=><option key={sel.id} value={sel.id}>{sel.name}</option>)}
        </Form.Select>
        </Form.Group>
        );
      }
      function SelectCityProvince(props){
        const [citeis,setCities]=useState([]);
        const onProvinceSelect=e=>{
          props.handleSubmit(e);
          setCities(citiesRaw.filter(city=>{  return (city.provinceId.toString()===e.target.value.toString());}));
        };
        
        
        return(
          <>
          <Select label="استان" name="province" array={provincesRaw} handle={onProvinceSelect} />
          <Select label="شهر" name="city" array={citeis} handle={props.handleSubmit}/>
          </>
          )
        }
        export function ModalSign() {
          const [show, setShow] = useState(false);
          
          const handleClose =() => setShow(false);
          const handleShow =  () => setShow(true);
          
          let data=useRef({});
          const handleSubmit=(e)=>{
            data={...data,[e.target.name]:e.target.value};
            console.log(data);
          };
          
          console.log("modal render!!");
          return (
            <>
            <Button variant="primary" onClick={handleShow}>
            درخواست پروژه
            </Button>
            
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>اطلاعات فرستنده</Modal.Title>
            
            </Modal.Header>
            <Modal.Body>
            <Form>
            <Tabs
            defaultActiveKey="personal"
            id="form-switch"
            className="mb-3"
            fill
            >
            <Tab eventKey="personal" title="شخصی">
            <Row>
            <Col md>
            <Group type="text" label="نام" onChange={handleSubmit} name="firstName"/>
            </Col>
            <Col md>
            <Group type="text" label="نام خانوادگی" onChange={handleSubmit} name="lastName"/>
            </Col>
            </Row>
            <Group as="textarea" label="توضیحات" onChange={handleSubmit} name="lastName"/>
            <SelectCityProvince  handleSubmit={handleSubmit}/>
            </Tab>
            <Tab eventKey="company" title="شرکت">
            <Row>
            <Col md>
            <Group type="text" label="نام" onChange={handleSubmit} name="firstName"/>
            </Col>
            <Col md>
            <Group type="text" label="نام خانوادگی" onChange={handleSubmit} name="lastName"/>
            </Col>
            </Row>
            <Group as="textarea" label="توضیحات" onChange={handleSubmit} name="lastName"/>
            <SelectCityProvince  handleSubmit={handleSubmit}/>
            </Tab>
            </Tabs>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            بستن
            </Button>
            <Button name="submit" variant="primary" onClick={handleSubmit}>
            ثبت
            </Button>
            </Modal.Footer>
            </Modal>
            </>
            );
          }
          
          export default ModalSign
