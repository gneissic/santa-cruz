import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  cartItems: [],
  cartNumber: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.cartNumber ++
      const newItem = action.payload
      const exisitingItems = state.cartItems.find((item)=> item.id === newItem.id)
      if (!exisitingItems) {
        state.totalAmount =   state.totalAmount + newItem.price
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          img: newItem.img,
          title:newItem.title,
          totalPrice: newItem.totalPrice,
          quantity: 1,
        })
      }else{
    exisitingItems.quantity++
    exisitingItems.price = exisitingItems.price + exisitingItems.totalPrice
    state.totalAmount = state.totalAmount + exisitingItems.totalPrice
      }
      
    },
    removeFromCart(state, action){
        state.cartNumber--
        const id = action.payload;
      const exisitingItem = state.cartItems.find((item) => item.id === id);
      if (exisitingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalAmount =   state.totalAmount - exisitingItem.price

      } else {
        exisitingItem.price  = exisitingItem.price - exisitingItem.totalPrice
        state.totalAmount =   state.totalAmount - exisitingItem.totalPrice
        exisitingItem.quantity--;
       
      }
    },
    onClearCart(state){
      state.cartItems = [],
      state.cartNumber = 0;
      state.totalAmount = 0
    }

  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;