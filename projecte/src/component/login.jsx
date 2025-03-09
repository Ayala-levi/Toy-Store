import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { set_is_manager } from "../redux/actions/clientAction"
import { set_current_client } from "../redux/actions/clientAction"
import { isExist } from "../axios/clientAxios"
import { useNavigate } from "react-router-dom"
import { getAllCategory } from "../axios/categoryAxios"
import { set_listCategory } from "../redux/actions/listCategoryAction"
import { empty } from "../redux/actions/basketAction"
export const Login = () => {
  const d = useDispatch()
  const [user, setuser] = useState({})
  const [inputValue, setInputValue] = useState({});
  const navigate=useNavigate();
   
  
  // let u = useSelector(s => s.dataClientReducer.currentClient.name);
  const func =async () => {
    d(empty());
    debugger
    if(user.name==="m"&&user.password==="0000")
      d(set_is_manager())
    try{
   const res= await  isExist(user.name,user.password)
      if(res.data)
      {
        d(set_current_client(user.name, user.password))
      alert("הינך מחובר לחשבונך")
      navigate('/home')
      }
      else{
        alert("עליך להירשם")
navigate('/register')
      }
    }
    catch (err) {
      console.log(err);
  }

    setInputValue({ name: "", password: "" })
  }


  return <div className="container" style={{backgroundColor:" #f0f0f0", borderRadius: '10px'}}>
    <h2> התחברות: </h2>
    <input className="form-control" type="text" placeholder="name" value={inputValue.name} onBlur={(e) => setuser({ ...user, name: e.target.value })} ></input><br></br>
    <input className="form-control" type="text" placeholder="password" value={inputValue.password} onBlur={(e) => setuser({ ...user, password: e.target.value })}></input>
    <button style={{ margin: "0.5rem",width:"20%" , backgroundColor:"#808080", fontSize:"15px"}} className="btn btn-primary" onClick={() => func()}> התחבר</button>
 
</div>
}



