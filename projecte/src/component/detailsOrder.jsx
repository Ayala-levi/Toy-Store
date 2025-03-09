import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const DetailsOrder = () => {
  let list = useSelector(x => x.dataShoppingReducer.order)
  let game = useSelector(x => x.dataGameReducer.list)
  const a = useParams();
  // const [date, setDate] = useState({});
  // const [total, settotal] = useState({});
  // const [obj, setObj] = useState([]);
  const index = list.findIndex((u) => u._id == a.id);
  const selectedOrder = list[index];
  const date = selectedOrder.date;
  const total = selectedOrder.totalPrice;
  const obj = selectedOrder.arrShopping;
  // useEffect(() => {
  //   console.log("list:", list);
  //   console.log("a.id:", a.id);
  //   const index = list.findIndex((u) => u._id == a.id);
  //   if (index !== -1) {
  //     const selectedOrder = list[index];
  //     setDate(selectedOrder.date);
  //     settotal(selectedOrder.totalPrice);
  //     setObj(selectedOrder.arrShopping);
  //   }
  // }, [list, a.id]);
  const getItemDetails = (id) => {
    debugger
    return game.find((u) => u._id == id);
  };
  return <><div class="order-details">
    <div class="card shadow" style={{ width: "100%" }}>
      <div class="card-header text-center">
        <h2>פרטי הזמנה</h2>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <h5><strong>תאריך :</strong> {new Date(date).toLocaleString('he-IL', { day: '2-digit', month: '2-digit', year: '2-digit' })}</h5>
          <h5><strong> שעה:</strong> {new Date(date).toLocaleString('he-IL', { hour: '2-digit', minute: '2-digit' })}</h5>
          <h5><strong>מספר הזמנה:</strong> #12345</h5>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead class="table-primary">
              <tr>
                <th>תמונה</th>
                <th>שם מוצר</th>
                <th>כמות</th>
                <th>מחיר ליחידה (₪)</th>
                <th>מחיר סופי (₪)</th>
              </tr>
            </thead>
            <tbody>
              {obj.map((x, i) => {
                const item = getItemDetails(x.id_game)
                return (<tr key={i}>

                  <td>
                    <img src={`http://localhost:8050/${item.img}`} alt="Product 1" class="product-img"></img>
                  </td>
                  <td> {item.name}</td>
                  <td> {x.amount}</td>
                  <td>{x.price}</td>
                  <td>{x.price * x.amount}</td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
        <div class="text-end mt-4">
          <h4><strong>סכום כולל:</strong>  {total} ₪</h4>
        </div>
      </div>
      <div class="card-footer text-center bg-light">
        <p>תודה רבה על הרכישה!</p>
      </div>
    </div>
  </div>
  </>
}
