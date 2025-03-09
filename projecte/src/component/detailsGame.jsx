import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const DetailsGame=()=>{
    debugger
    let u=useParams()
    let mylist = useSelector(s => s.dataGameReducer.list)
    let listcategory = useSelector(s => s.dataCategoryReducer.list)
    let obj=mylist.find(x=>x._id==u.code)
    let objCategory=listcategory.find(x=>x._id==obj.code_category)
    console.log(obj)
    return<><div class="details-container">
        <h2>פרטי משחק</h2>

        <div class="detail">
            <label> שם משחק:</label>
            <span>{obj.name} </span>
        </div>

        <div class="detail">
            <label> :תמונת המשחק</label>
            <img src={`http://localhost:8050/${obj.img}`} alt="Adventure Quest"></img>
        </div>
        <div class="detail">
            <label>  קטגורית משחק :</label>
            <span>{objCategory.name}</span>
        </div>

        {/* {`../images/${obj.img}`} */}
        <div class="detail">
            <label>מחיר:</label>
            <span>{obj.price}</span>
        </div>

        <div class="detail">
            <label> גיל מומלץ:</label>
            <span>{obj.age}</span>
        </div>

        <div class="detail">
            <label>פרטי המשחק :</label>
            <span>{obj.detailsGame}</span>
        </div>
    </div>
    </>
}