import { useState } from "react"
import { addCategory } from "../axios/categoryAxios"
import { useDispatch } from "react-redux"
import { add_category } from "../redux/actions/listCategoryAction"
import { useNavigate } from "react-router-dom"

export const AddCategory = () => {
    let d = useDispatch()
    const [myexcep, setmyexecp] = useState({ name: true })
    let navigate = useNavigate()
    const [obj, setobj] = useState({})
    const add = () => {
        addCategory(obj).then((x) =>
            d(add_category(x))
        ).catch((e) => console.log(e))
        navigate('/mylistCategory')
    }
    return <>
      <div class="search-container" style={{marginTop:"2rem"}}>
            <h4 class="search-title">טופס הוספת קטגוריה: </h4>
            <label class="form-label">שם קטגוריה</label>
            <input type="text" class="search-input" placeholder="Enter name category " onBlur={(e) => setobj({ ...obj, name: e.target.value })} />
            <button onClick={() => add()} class="search-button">הוסף קטגוריה</button>
        </div>
    </>
}