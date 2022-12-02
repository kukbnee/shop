import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartData from "./store/cartSlice.js";

//useState역할
let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20},
  reducers : {
    changeName(state) {
      state.name = 'park';
    },
    changeAge(state, a) {
      state.age += a.payload;
    }
  }
})

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})



export let { changeName, changeAge } = user.actions;


export default configureStore({
  reducer: {
    //등록 작명 : state.reducer
    user : user.reducer,
    stock : stock.reducer,
    cartData : cartData.reducer
  }
})
