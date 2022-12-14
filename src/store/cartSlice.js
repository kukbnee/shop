import { createSlice } from "@reduxjs/toolkit";

let cartData = createSlice({
    name : 'cartData',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
      changeCount(state, id) {
        console.log(JSON.stringify(state));
         
        state.map((data, idx)=>{
          if(data.id == id.payload) {
            
            state[idx].count ++;
          }
        })
        
        
      },
      addCart(state, action) {
        state.push(action.payload);
      }
    }
});

export let { changeCount, addCart } = cartData.actions; 

export default cartData;