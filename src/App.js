import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from './data.js';



function App() {

  let [shose] = useState(data);
  
  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">빈슈즈샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#lanking">랭킹</Nav.Link>
            <Nav.Link href="#new">신상</Nav.Link>
            <Nav.Link href="#sale">세일</Nav.Link>
            <Nav.Link href="#codi">코디</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {
            shose.map(function(pData, idx) {
              return(
                <Product sendData={pData} i={idx+1}></Product>
              )
            })
          }
        </Row>
      </Container>
      
    </div>
  );
}

function Product(props) {
  return(
      <Col>
        <img src={props.sendData.imgPath} style={{height: "200px"}}></img>
        <h4>{props.sendData.title}</h4>
        <p>{props.sendData.price}</p>
      </Col>
  );
}
export default App;
