import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import myImage from '../public/imran.png';
import s1 from '../public/html.png';
import s2 from '../public/css.png';
import s3 from '../public/javascript.png';
import s4 from '../public/react.png';
import s5 from '../public/mongo.png';


import p1 from '../public/pro-1.png';
import p2 from '../public/pro-2.png';
import p3 from '../public/pro-3.png';




const App = () => {
  return (
    <>
 
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Project">Projects</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
    <div className='main-container'>
      
      <img src={myImage} alt="" className='my-img' />
      <h1 className='main-heading'>I'm Imran Hussain</h1>
      <h2 className='second-heading'>I'm MERN Full Stack Developer</h2>
      <div className="btn">
      <Button variant="primary" className='primary'>github</Button>
      <Button variant="outline-light">Resume</Button>
      </div>

      <p className="details">
        Proficient MERN full stack developer adept at html, css, javascript. Express.js, mongodb, recognized for outstanding project creations, blending technical skills with creativity. dedicated to seamless user experiences.i bring innovation and consistently surpass project goals through my development expertise.
      </p>
    </div>

    <Container className='about-me'>
    <h1 style={{textAlign:"center",marginBottom:"30px"}} className='comman-heading'>About Me</h1>

     <div className="my-details">
     <div className="about-img">
        <img src={myImage} alt="my image" />
       </div>
       <div className="about-detail" style={{fontSize:"20px"}}>
       <p>My name is Imran Hussain, and I graduated in Computer Science Engineering from VIST in 2024. I am a web developer.</p>
       <p>I'm dedicated to delivering seamless user experiences and surpassing project goals through innovative development. My work, driven by a commitment to excellence, spans both front-end and back-end, with a comprehensive understanding of the full development lifecycle. In my free time, I enjoy playing cricket, video games, and coding.</p>
       </div>
     </div>
    </Container>


    <Container className='timestemp'>
      <h1 style={{textAlign:"center",marginBottom:"30px"}} className='comman-heading'>TimeLine</h1>
      <Row>
      <Card border="primary" style={{ width: '18rem',marginLeft:"2rem" }}>
      <Card.Header style={{color:"blue"}} >Matriculation</Card.Header>
        <Card.Body>
          <Card.Title>MP Bord</Card.Title>
          <Card.Text>
          Completed My Matriculation with A grade.
          </Card.Text>
        </Card.Body>
      </Card>
  

      <Card border="secondary" style={{ width: '18rem',marginLeft:"2rem" }}>
        <Card.Header style={{color:"blue"}} >Intermediate</Card.Header>
        <Card.Body>
          <Card.Title>MP Bord</Card.Title>
          <Card.Text>
          Completed MY Intermediate In Science With A+ Grade
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card border="success" style={{ width: '18rem',marginLeft:"2rem" }}>
        <Card.Header style={{color:"blue"}} >Diploma</Card.Header>
        <Card.Body>
          <Card.Title>RGPV</Card.Title>
          <Card.Text>
          I Completed My Diploma (3-years) In Computer Science WIth First Division Honors.
          </Card.Text>
        </Card.Body>
      </Card>
  

      <Card border="danger" style={{ width: '18rem',marginLeft:"2rem" }}>
        <Card.Header style={{color:"blue"}} >Btech</Card.Header>
        <Card.Body>
          <Card.Title>RGPV</Card.Title>
          <Card.Text>
          I Completed My B-Tech In Computer Science WIth First Division Honors.
          </Card.Text>
        </Card.Body>
      </Card>


     

      </Row>
    </Container>

   

    <Container className='my-skills' style={{display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
    <h1 style={{textAlign:"center",marginBottom:"30px"}} className='comman-heading'>My Skills</h1>
      <Row>
      <Card border="primary"  style={{ width: '10rem',height:"12rem",marginLeft:"2rem" }}>
        <Card.Body>
      <img src={s1} alt="" width="100px" />

          <Card.Title style={{textAlign:"center"}}>HTML</Card.Title>
        </Card.Body>
      </Card>
  

      <Card border="secondary"  style={{ width: '10rem',height:"12rem",marginLeft:"2rem" }}>
        <Card.Body>
      <img src={s2} alt="" width="100px" />

          <Card.Title style={{textAlign:"center", marginTop:"10px"}}>CSS</Card.Title>
        </Card.Body>
      </Card>
      
      <Card border="success"  style={{ width: '10rem',height:"12rem",marginLeft:"2rem" }}>
        <Card.Body>
      <img src={s3} alt="" width="100px" />

          <Card.Title style={{textAlign:"center", marginTop:"10px"}}>JAVASCRIPT</Card.Title>
        </Card.Body>
      </Card>
  

      <Card border="danger" style={{ width: '10rem',height:"12rem",marginLeft:"2rem" }}>
        <Card.Body>
      <img src={s4} alt="" width="100px" />

          <Card.Title style={{textAlign:"center", marginTop:"10px"}}>REACT</Card.Title>
        </Card.Body>
      </Card>


      <Card border="primary"  style={{ width: '10rem',height:"12rem",marginLeft:"2rem" }}>
        <Card.Body>
      <img src={s5} alt="" width="80px" />

          <Card.Title style={{textAlign:"center", marginTop:"10px"}}>M. DB</Card.Title>
        </Card.Body>
      </Card>

      </Row>
    </Container>



    <Container className='my-project' style={{display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column", marginBottom:"30px"}}>
    <h1 style={{textAlign:"center",marginBottom:"30px", marginTop:"80px"}} className='comman-heading'>My Projects</h1>
      <Row>
      <Card style={{ width: '18rem',marginLeft:"30px" }}>
      <Card.Img variant="top" src={p1} />
      <Card.Body>
        <Card.Title>Burger Web</Card.Title>
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, laudantium!
        </Card.Text>
        <Button variant="primary">view</Button>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem',marginLeft:"30px" }}>
      <Card.Img variant="top" src={p2} />
      <Card.Body>
        <Card.Title>Shoes Web</Card.Title>
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, laudantium!
        </Card.Text>
        <Button variant="primary">view</Button>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem',marginLeft:"30px" }}>
      <Card.Img variant="top" src={p3} />
      <Card.Body>
        <Card.Title>Campus Web</Card.Title>
        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, laudantium!
        </Card.Text>
        <Button variant="primary">view</Button>
      </Card.Body>
    </Card>
  

     
      </Row>
    </Container>

    <Container style={{padding:"10px 200px"}}>
    <Form className='form-container' style={{}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

   
    <footer>
        <p>IMRAN HUSSAIN</p>
    </footer>
  
    </>
  )
}

export default App