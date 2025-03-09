import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_amount, dellItem, empty, less_amount } from "../redux/actions/basketAction"
import '../basket.css'

import '../input.css'
import { useNavigate } from "react-router-dom"
import { idClient } from "../axios/clientAxios"
import { add } from "../axios/shoppingAxios"
export const BasketShopping = () => {
    const navigate=useNavigate();
    debugger
// const [total, settotal] = useState({})
    let user = useSelector(x => x.dataClientReducer.currentClient)
    const basket = useSelector(x => x.dateBasketReducer.basket)
    let d = useDispatch()
    const func=()=>{
        let amount=0
        for (let index = 0; index < basket.length; index++) {
            amount=amount+basket[index].amount    
        }
        return amount
    }
    const totalPrice=()=>{
        let totalPrice=0
        for (let index = 0; index < basket.length; index++) {
            totalPrice+=basket[index].price*basket[index].amount
        }
        return totalPrice
    }
    const addOrder = async () => {
        if(user.name===""&&user.password===""){
            alert("אינך מחובר ואינך יכול לבצע הזמנה")
            navigate('/login')
        }
        else{
        debugger
    
        let id = "";
        try {
            // מחכים לתוצאה של idClient
            const response = await idClient(user.name, user.password);
            id = response.data;
        } catch (e) {
            console.log(e);
            return; // אם קרתה שגיאה, יוצאים מהפונקציה
        
        }
        const selectedDetails = Object.entries(basket).map(([key, value]) => ({
            price: value.price,
            id_game: value._id,
            amount: value.amount,
        }));
    

        const x = {
            code_client: id,
            date: new Date(),
            totalPrice: totalPrice(),
            arrShopping: selectedDetails
        };
    
        // מוסיפים את ההזמנה

        try {
            // מחכים לתוצאה של idClient
            const r=await  add(x) ;
            const a = r.data;
        } catch (e) {
            console.log(e);
            return; // אם קרתה שגיאה, יוצאים מהפונקציה
        }
        navigate('/order')
    }
        // add(x).then((x)=>
        // console.log(x.data)).catch((e)=>console.log(e));
    }
    return <> <div class="shopping-cart">
        <h2> סל קניות</h2>
        {basket.map((x, i) =>
            <div key={i} class="cart-item">
                <img src={`http://localhost:8050/${x.img}`} class="cart-item-image"></img>
                {/* <img src={`../images/${x.img}`} alt="Game 1" class="cart-item-image" /> */}
                <div class="cart-item-details">
                    <h3 class="cart-item-title">{x.name}</h3>
                    <p>  מחיר ליחידה: {x.price}</p>
                </div>
                <div class="cart-item-quantity-wrapper">
                    <label for="quantity-1">כמות:</label>
                    <div className="quantity-selector">
                        <button onClick={()=>d(less_amount(x._id))} className="btn-decrease" >
                            -
                        </button>
                        <p className="quantity-display">{x.amount}</p>
                        <button onClick={()=>d(add_amount(x._id))} className="btn-increase" >
                            +
                        </button>
                    </div>
                </div>
                <div class="cart-item-total">מחיר סופי : {x.price * x.amount} שקל</div>
                <button class="remove-item" onClick={()=>d(dellItem(x._id))}>מחק</button>
            </div>)}


        <div class="cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items:{func()}</p>
            <p>Total Price: {totalPrice()}</p>
            <button class="checkout-button" onClick={()=>{ addOrder()}}>Proceed to Checkout</button>
            {/* <button class="checkout-button" onClick={()=>{{ addOrder() ;navigate('/order')};d(empty()); }}  >Proceed to Checkout</button> */}

        </div>
    </div>
    </>
    }
