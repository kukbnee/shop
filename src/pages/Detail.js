import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function Detail(props) {
  let {id} = useParams();
  let [tabs, setTabs] = useState(0);
  let [fade, setFade] = useState('');
  useEffect(()=>{
    setTimeout(()=>{setFade('end');}, 100);
    return ()=>{
      //clearTimeout(timeout);
      setFade('');
    }
  }, [tabs]);
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={props.sendData[id].imgPath} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.sendData[id].title}</h4>
            <p>{props.sendData[id].content}</p>
            <p>{props.sendData[id].price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link onClick={()=>{
              setTabs(0);
              setFade('end');
            }} eventKey="link-0" >Option 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{
              setTabs(1);
              setFade('end');
            }} eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{
              setTabs(2);
              setFade('end');
            }} eventKey="link-2">
              Option 3
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{
              
            }} eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className={`start ` + fade}>
          <TabComponent pTabs={tabs} pFade={fade} />
        </div>
      </div>
    )
}

function TabComponent(props) {
  
  
  if(props.pTabs == "0") {
    return (<div>내용0</div>);
  }else if(props.pTabs == "1") {
    return (<div>내용1</div>);
  }else if(props.pTabs == "2") {
    return (<div>내용2</div>);
  }else{
    return (<div>내용0</div>);
  }
}

export default Detail;