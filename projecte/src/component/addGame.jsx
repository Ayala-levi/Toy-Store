import { useState } from "react"
import { addGame } from "../axios/gameAxios"
import { add_game } from "../redux/actions/listGameAction"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


export const AddGame = () => {
    let d = useDispatch()
    let navigate = useNavigate()
    const [obj, setobj] = useState({})
    const add = () => {
        addGame(obj).then((x) =>
            d(add_game(x.data))
        ).catch((e) => console.log(e))
        navigate('/myListGame')
    }
    return <>
        <div class="search-container" style={{ marginTop: "2rem" }}>
            <h3 class="search-title">טופס הוספת משחק: </h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ padding: "2rem" }}>
                    <label style={{ padding: "1rem" }} for="gameName" class="form-label">שם המשחק:
                        <input type="text" class="search-input" placeholder="Enter name game " onBlur={(e) => setobj({ ...obj, name: e.target.value })} />
                    </label><br></br>

                    <label style={{ padding: "1rem" }} for="categoryCode" class="form-label">קוד קטגוריה:
                        <input type="text" class="search-input" placeholder="Enter kod Category " onBlur={(e) => setobj({ ...obj, code_category: e.target.value })} />
                    </label><br></br>

                    <label style={{ paddingTop: "1rem", paddingRight: "4rem",paddingBottom:"1rem" }} for="price" class="form-label">מחיר:
                        <input type="text" class="search-input" placeholder="Enter price game " onBlur={(e) => setobj({ ...obj, price: e.target.value })} />
                    </label><br></br>

                    <label style={{ paddingTop: "1rem", paddingRight: "4rem",paddingBottom:"1rem" }} for="quantity" class="form-label">כמות:
                        <input type="text" class="search-input" placeholder="Enter amount game " onBlur={(e) => setobj({ ...obj, amount: e.target.value })} />
                    </label><br></br>
                </div>
                <div style={{ padding: "2rem" }}>
                    <label style={{ paddingTop: "1rem", paddingRight: "4rem",paddingBottom:"1rem" }} for="age" class="form-label">גיל מינימלי:
                        <input type="text" class="search-input" placeholder="Enter age game " onBlur={(e) => setobj({ ...obj, age: e.target.value })} />
                    </label><br></br>


                    <label style={{ paddingTop: "1rem", paddingRight: "7rem",paddingBottom:"1rem" }} for="image" class="form-label">תמונה:
                        <input type="text" class="search-input" placeholder="Enter image game " onBlur={(e) => setobj({ ...obj, img: e.target.value })} />
                    </label><br></br>


                    <label style={{ paddingTop: "1rem", paddingRight: "4rem",paddingBottom:"1rem" }} for="image" class="form-label">פרטי משחק:
                        <input type="text" class="search-input" placeholder="Enter details game " onBlur={(e) => setobj({ ...obj, detailsGame: e.target.value })} />
                    </label><br></br>

                    <button style={{justifyContent:"center", marginRight:"7rem"}} onClick={() => add()} class="search-button">הוסף משחק</button>
                </div>
            </div>
        </div>

        {/* <div className="mb-3">
            <input type="text" placeholder="Enter name game " onBlur={(e) => setobj({ ...obj, name: e.target.value })} />
        </div>
        <div className="mb-3">
            <input type="text" placeholder="Enter kod Category " onBlur={(e) => setobj({ ...obj, code_category: e.target.value })} />
        </div>
        <div className="mb-3">
            <input type="text" placeholder="Enter price game " onBlur={(e) => setobj({ ...obj, price: e.target.value })} />
        </div>
        <div className="mb-3">
            <input type="text" placeholder="Enter image game " onBlur={(e) => setobj({ ...obj, img: e.target.value })} />
        </div>
        <div className="mb-3">
            <input type="text" placeholder="Enter amount game " onBlur={(e) => setobj({ ...obj, amount: e.target.value })} />
        </div>
        <div className="mb-3">
            <input type="text" placeholder="Enter age game " onBlur={(e) => setobj({ ...obj, age: e.target.value })} />
        </div>
        <div className="mb-3">
            <input type="text" placeholder="Enter details game " onBlur={(e) => setobj({ ...obj, detailsGame: e.target.value })} />
        </div>
        <button onClick={() =>add()} type="submit" className="btn btn-primary" >הוסף</button> */}
    </>
}