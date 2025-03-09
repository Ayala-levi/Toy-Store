import { produce } from 'immer'

export const myState = {
  basket: [
    // {  code:1234,name: "puzzel", img: "חתלתול.jpg", amount: 3,price:3, totalPrice: 30
    // },
  ],

}
export const dateBasketReducer = produce((state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      debugger;
      if (state.basket.some(x => x._id == action.payload._id)) {
        const index = state.basket.findIndex(x => x._id == action.payload._id)
        state.basket[index].amount =  state.basket[index].amount+1
      }
      else {
        const x = {...action.payload,amount:1}
        // const obj = { code: x.code, name: x.name, img: x.img, amount: 1, price: x.price, priceTotal: x.price }
        state.basket.push(x)
      }
      break;
    }
    case "ADD_AMOUNT": {
      const index = state.basket.findIndex(x => x._id == action.payload)
      state.basket[index].amount += 1
      break;
    }
    case "LESS_AMOUNT": {
      const index = state.basket.findIndex(x => x._id == action.payload)
      if (state.basket[index].amount > 1)
        state.basket[index].amount -= 1
      else
        state.basket = state.basket.filter(x => x._id != action.payload)
      break;
    }
    case "DELL_ITEM": {
      state.basket=state.basket.filter(x => x._id != action.payload)
      break;
    }
    case "EMPTY": {
return{
  ...state,
  basket:[]
};
      break;
    }
    default:
      break;
  }

}, myState)