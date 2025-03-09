import { useDispatch, useSelector } from "react-redux"
import { dell_category, set_listCategory, update_category } from "../redux/actions/listCategoryAction"
import { useEffect, useState } from "react"
import { dellCategory, getAllCategory } from "../axios/categoryAxios.jsx"
import { updateCategory } from "../axios/categoryAxios.jsx"
export const ListCategory = () => {
    const d = useDispatch()
    let mylist = useSelector(s => s.dataCategoryReducer.list)
    useEffect(() => {
       
            getAllCategory().then((x) =>{
                console.log(x.data);

                d(set_listCategory(x.data))}

            )
                .catch((err) => console.log(err));
        
    }, [])


    let isManager = useSelector(x => x.dataClientReducer.isManager)
    const [isedit, setidedit] = useState(false)
    const [keyedit, setkeyedit] = useState()
    const [saveedit, setsaveedit] = useState(false)
    const [item, setitem] = useState({})
    const saveitem = (x) => {
        setitem({ _id: x._id, name: x.name })
    }
    const save = () => {
        debugger
        console.log(item)
        setsaveedit(false)
        let data=updateCategory(item)
        d(update_category(item));
        setidedit(false)
    }

 const delLine=(id)=>{ 
   d(dell_category(id,dellCategory(id)))
 }

    return <> <table className="table" style={{backgroundColor:"white"}}>
            <thead>
                <tr>
                    <th>code </th>
                    <th>name</th>
                    {isManager && <th></th>}
                    {isManager && <th></th>}
                    {isedit||saveedit && <th></th>}
                </tr>
            </thead>
            <tbody>
                {
                    mylist.map((x, i) => <tr key={i}>
                        {/* {isedit||saveedit && keyedit == i ? (<td><input placeholder={x._id} onBlur={(e) => { if (e.target.value) (setitem({ ...item, _id: e.target.value })) }}  ></input></td>) : (<td>{x._id}</td>)} */}


                <td>{x._id}</td>{}
                        {isedit||saveedit && keyedit == i ? (<td><input placeholder={x.name} onBlur={(e) => { if (e.target.value) (setitem({ ...item, name: e.target.value })) }}  ></input></td>) : (<td>{x.name}</td>)}
                        {isManager &&!saveedit&& <td> <button onClick={() => { setidedit(true); setkeyedit(i); setsaveedit(true); saveitem(x) ;setidedit(false) }}>ערוך רשומה</button></td>}
                        {saveedit && keyedit == i && <td><button onClick={() => {setitem({ ...item, _id:x._id}); save();}}> שמור שינויים</button></td>}
                        {isManager && <td><button className="button" onClick={()=>delLine(x._id)}  >  מחק רשומה </button></td>}
                    </tr>)

                }
            </tbody>
        </table>





    </>
}