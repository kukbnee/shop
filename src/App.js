import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Button, Navbar, NavDropdown, Container, Nav, Row, Col} from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail.js'



function App() {

  let [shose] = useState(data);
  let navigate = useNavigate();

  let [flagDtl, setFlagDtl] = useState(false);
  let [fade, setFade] = useState('');

  useEffect(()=>{
    console.log(flagDtl);
    setTimeout(()=>{setFade('end')}, 100);
    return()=>{
      setFade('');
    }
  },[flagDtl])
  
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/')}}>빈슈즈샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="#lanking">랭킹</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#new">신상</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#sale">세일</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#codi">코디</Nav.Link>
            </Nav.Item>
            <NavDropdown title="이벤트" onClick={()=>{navigate('/event')}}>
              <NavDropdown.Item onClick={()=>{navigate('/event/one')}}>하나</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate('/event/two')}}>둘</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
       
      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg"></div>
            <Container>
              <Row>
                {
                  shose.map(function(pData, idx) {
                    let path = "detail/"+ pData.id;
                    console.log(JSON.stringify(path));
                    return(
                      <Link onClick={()=>{
                        
                        setFlagDtl(!flagDtl);
                        
                      }} to={path}>
                        <Product sendData={pData} i={idx+1}></Product>
                      </Link>
                    )
                  })
                }
              </Row>
            </Container>
          </div>}/>
        <Route path="/detail/:id" element={<div className={`start ` + fade}><Detail sendData={shose}/></div>}/>
        <Route path="/event" element={<div><h4>오늘의 이벤트</h4><Outlet></Outlet></div>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path="*" element={<div>없는페이지임</div>}/>
      </Routes>
      
      

      
      
    </div>
  );
}

function Product(props) {
  return(
      <Col >
        <img src={props.sendData.imgPath} style={{height: "200px"}}></img>
        <h4>{props.sendData.title}</h4>
        <p>{props.sendData.price}</p>
      </Col>
  );
}

export default App;
