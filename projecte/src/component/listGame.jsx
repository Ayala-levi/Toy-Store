import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dell_game, set_listGame, update_game } from "../redux/actions/listGameAction"
import { getAllGame,updateGame,dellGame } from "../axios/gameAxios.jsx"

export const ListGame = () => {
    const d = useDispatch()
    let mylist = useSelector(s => s.dataGameReducer.list)
    useEffect(() => {
        debugger
       if(mylist.length==0){
            getAllGame().then((x) =>
                d(set_listGame(x.data))

            )
                .catch((err) => console.log(err));
        }
    }, [])


    let isManager = useSelector(x => x.dataClientReducer.isManager)
    const [isedit, setidedit] = useState(false)
    const [keyedit, setkeyedit] = useState()
    const [saveedit, setsaveedit] = useState(false)
    const [item, setitem] = useState({})
    const saveitem = (x) => {
        debugger
      setitem({_id:x._id,  name: x.name,code_category: x.code_category, price: x.price, age: x.age,img:x.img,amount:x.amount,detailsGame:x.detailsGame  })
    }

    const save = () => {
        debugger
        setsaveedit(false)
       let data=updateGame(item)
        d(update_game(item))

        setidedit(false)
    }
    return <>
        <p>{isManager ? "This is a manager." : "This is not a manager."}</p>

        <table className="table"  style={{backgroundColor:"white"}}>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>age</th>
                    <th>image</th>
                    <th>Details Game</th>
                    <th> amount</th>
                    <th>code category</th>
                    {isManager && <th></th>}
                    {isManager && <th></th>}
                    {isedit && <th></th>}
                </tr>
            </thead>
            <tbody>
                {
                    mylist.map((x, i) => <tr key={i}>
                        {isedit||saveedit && keyedit == i ? (<td><input placeholder={x.name} onBlur={(e) => { if (e.target.value) (setitem({ ...item, name: e.target.value })) }} ></input></td>) : (<td>{x.name}</td>)}
                        {isedit||saveedit && keyedit == i ? (<td><input placeholder={x.price} onBlur={(e) => { if (e.target.value) (setitem({ ...item, price: e.target.value })) }} ></input></td>) : (<td>{x.price}</td>)}
                        {isedit||saveedit && keyedit == i ? (<td><input placeholder={x.age} onBlur={(e) => { if (e.target.value) (setitem({ ...item, age: e.target.value })) }}></input></td>) : (<td>{x.age}</td>)}
                        
                        {isedit||saveedit && keyedit == i ? (<td><input placeholder={x.img} onBlur={(e) => { if (e.target.value) (setitem({ ...item, img: e.target.value })) }}></input></td>) : (<td>{x.img}</td>)}
                        
                        {isedit||saveedit && keyedit == i ? (<td><input placeholder={x.detailsGame} onBlur={(e) => { if (e.target.value) (setitem({ ...item, detailsGame: e.target.value })) }}></input></td>) : (<td>{x.detailsGame}</td>)}
                        {isedit||saveedit && keyedit == i ? (<td><input placeholder={x.amount} onBlur={(e) => { if (e.target.value) (setitem({ ...item, amount: e.target.value })) }}></input></td>) : (<td>{x.amount}</td>)}
                        
                        {isedit||saveedit && keyedit == i ? (<td><input placeholder={x.code_category} onBlur={(e) => { if (e.target.value) (setitem({ ...item, code_category: e.target.value })) }} ></input></td>) : (<td>{x.code_category}</td>)}
                        {isManager &&!saveedit&&
                            <td><button onClick={() => { setidedit(true) ;setkeyedit(i); setsaveedit(true); saveitem(x);setidedit(false)}}>ערוך רשומה</button></td>}

                        {saveedit && keyedit == i && <td><button onClick={() => save()}> שמור שינויים</button></td>}
                        {isManager && <td><button className="button" onClick={(e)=>{e.preventDefault();  d(dell_game(x._id,dellGame(x._id)))  }} >  מחק רשומה </button></td>}
                    </tr>)
                }
            </tbody>
        </table>

    </>

}