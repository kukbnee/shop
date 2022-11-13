import { useParams } from "react-router-dom";

function Detail(props) {
  let {id} = useParams();
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
      </div>
    )
}
export default Detail;