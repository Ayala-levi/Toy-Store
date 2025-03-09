import { useDispatch, useSelector } from "react-redux"
import { getAllOrder } from "../axios/shoppingAxios"
import { idClient } from "../axios/clientAxios"
import { useEffect } from "react"
import { order } from "../redux/actions/shoppingAction.jsx"
import { useNavigate } from "react-router-dom"

export const AreaPersonal = () => {

    let d=useDispatch()

    let list =useSelector(x => x.dataShoppingReducer.order)

    let user = useSelector(x => x.dataClientReducer.currentClient)
    debugger
    useEffect( () => {

         idClient(user.name, user.password)
    .then((x) =>

       getAllOrder(x.data)).then((y)=>{  console.log('Orders:', y.data);
            d(order(y.data)); console.log('list',list) }
        )
        .catch((e)=> console.log(e))
    }
        
    , )

   
    const navigate=useNavigate();

    return <>  <div class="container mt-5">

        <h3 class="text-center text-primary mb-4">היסטוריית הזמנות</h3>

        <div class="card shadow" style={{ width: "100%" }}>
            <div class="card-body">
                <table class="table table-striped text-center align-middle"  style={{minHeight: '100px'}}>
                    <thead class="table-primary">
                        <tr>
                            <th>תאריך הזמנה</th>
                            <th>מחיר סופי</th>
                            <th>פרטי הזמנה</th>
                        </tr>
                    </thead>
                    <tbody>

                       {list.map((x,i) =><tr>
                            <td>{new Date(x.date).toLocaleString('he-IL', { day: '2-digit', month: '2-digit', year:'2-digit' })}</td>
                            <td>{x.totalPrice}</td>
                            <td>
                                <button onClick={()=>  navigate(`/detailsOrder/${x._id}`)} class="btn btn-info text-white btn-sm">
                                    פרטי הזמנה
                                </button>
                            </td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>

}