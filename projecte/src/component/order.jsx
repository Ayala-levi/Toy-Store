import { useDispatch, useSelector } from "react-redux"
import { empty } from "../redux/actions/basketAction"

export const Order = () => {
    const a=useDispatch()
    const basket = useSelector(x => x.dateBasketReducer.basket)
    const current = useSelector(x => x.dataClientReducer.currentClient)
    const d=new Date()
    const func = () => {
        let price = 0
        for (let index = 0; index < basket.length; index++) {
            price += basket[index].amount*basket[index].price
        }
        return price
    }
    return <>
        <div className="container mt-5 w-100" style={{ maxWidth: "800px" }} >
            <div className="card shadow" style={{ width: "100%" }} >
            {/* className="card-header text-center bg-primary text-white" */}
                <div style={{backgroundColor:"rgb(241, 241, 201)"}}>
                    <h2>סיום קניה</h2>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <h5>
                            <strong>שם לקוח:</strong> {current.name}
                        </h5>
                        <h5>
                            <strong>תאריך:</strong> {
                            
                            d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}
                        </h5>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                               
                                    <th>שם המשחק</th>
                                    <th>מחיר ליחידה</th>
                                    <th>כמות</th>
                                    <th>מחיר סופי</th>
                                </tr>
                            </thead>
                            <tbody>
                                {basket.map((x, i) => (
                                    <tr key={i}>
                                        <td>{x.name}</td>
                                        <td>{x.price}</td>
                                        <td>{x.amount}</td>
                                        <td>{x.amount*x.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="text-end mt-4">
                        <h4>
                            <strong>סכום הקניה:</strong> ₪{func()}
                        </h4>
                    </div>
                </div>
                <div className="card-footer text-center bg-light">
                    <p>תודה רבה על הרכישה!</p>
                </div>
            </div>
        </div>

    </>
}