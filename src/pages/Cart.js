import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import store, { changeName, changeAge } from '../store.js';
import { changeCount } from './../store/cartSlice.js';

function Cart() {

  //redux가져와줌
  let a = useSelector((state)=>{ return state});
  console.log(a.stock); 

  let stateCartData = useSelector((state => state.cartData));
  let dispatch = useDispatch();
  return (
    <div>
      {a.user.name}, {a.user.age}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            stateCartData.map((data, idx)=>
              
                <tr key={idx}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.count}</td>
                  <td><button onClick={()=>{
                    //dispatch(changeAge(102))
                    dispatch(changeCount(data.id))
                  }}>+</button></td>
                </tr>
              
            )
          }
        </tbody>
      </Table> 
    </div>
   );
}

export default Cart;