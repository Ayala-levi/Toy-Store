import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { add_item } from "../redux/actions/basketAction"
import { getAllGame, getByCategory } from "../axios/gameAxios"
import { set_listGame } from "../redux/actions/listGameAction"
import { useEffect, useState } from "react"
import { find_id_category, set_listCategory } from "../redux/actions/listCategoryAction"
import { getAllCategory } from "../axios/categoryAxios"



export const Home = () => {
    let mylist = useSelector(s => s.dataGameReducer.list)
    let listCategory = useSelector(s => s.dataCategoryReducer.list)
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    let mynavigate = useNavigate()
    const [filter, setfilter] = useState("")
    const [found, setfound] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("");
    let d = useDispatch()

    useEffect(() => {

        getAllCategory().then((x) => {
            console.log(x.data);

            d(set_listCategory(x.data))
        }

        )
            .catch((err) => console.log(err));
        //

        getAllGame().then((x) => {
            d(set_listGame(x.data)); setGames(x.data);
            setFilteredGames(x.data)
        }

        )
            .catch((err) => console.log(err));

    }, [d])


    const func = async () => {
        setfound(false)
        debugger
        const index = listCategory.findIndex((u) => u.name === selectedCategory)
        if (index === -1)
            alert("שם קטגוריה שגויה")

        else {
            try {
                let listFilterById = await getByCategory(listCategory[index]._id)
                const a = listFilterById.data
                if (a.length == 0)
                    setfound(true)
                setFilteredGames(listFilterById.data)

            }
            catch (e) { console.log(e) }
        }

    }
    return <> <b><h4 class="search-title">חיפוש לפי קטגוריה:</h4></b>
        <div className="d-flex gap-2">
            <select className="form-select"
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">-- בחר קטגוריה --</option>
                {listCategory.map((x, i) => (
                    <option key={i} >
                        {x.name}
                    </option>
                ))}
            </select>
            <button className="search-button" onClick={func}>חפש</button>
        </div>
        {/* <div class="search-container">
            <h4 class="search-title">חיפוש לפי קטגוריה:</h4>
            <input type="text" class="search-input" placeholder="הכנס שם קטגוריה" onBlur={(e) => setfilter(e.target.value)} />
            <button class="search-button" onClick={func}>חיפוש</button>
        </div> */}

        {found && <p>לא נמצאו משחקים בקטגוריה : {filter}</p>}
        <div class="container">
            {filteredGames.map((x, i) =>
                <div class="card" onClick={() => mynavigate(`/detailsGame/${x._id}`)} key={i}>
                    <div>
                        <img src={`http://localhost:8050/${x.img}`} alt="Game 1"></img>
                    </div>
                    <h3>{x.name}</h3>
                    <button onClick={(e) => { e.stopPropagation(); d(add_item(x)) }}>Add to Cart</button>
                </div>
            )}
        </div>
    </>
}