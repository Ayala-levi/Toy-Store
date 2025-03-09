import { Route, Routes } from "react-router-dom"
import { AddCategory } from "./addCategory"
import { ListCategory } from "./listCategory"
import { ListGame } from "./listGame"
import { Login } from "./login"
import { Home } from "./home"
import { DetailsGame } from "./detailsGame"
import { BasketShopping } from "./basketShopping"
import { AddGame } from "./addGame"
import { Register } from "./register"
import { Order } from "./order"
import { AreaPersonal } from "./areaPersonal"
import { DetailsOrder } from "./detailsOrder"



export const Routing = () => {
    return<Routes>

        <Route path="myaddCategory" element={<AddCategory></AddCategory>} >  </Route>
        <Route path="mylistCategory" element={<ListCategory></ListCategory>} >  </Route>
        <Route path="myListGame" element={<ListGame></ListGame>} >  </Route>
        <Route path="login" element={<Login></Login>} >  </Route>
        <Route path="home" element={<Home></Home>} >  </Route>
        <Route path="detailsGame/:code" element={<DetailsGame></DetailsGame>} >  </Route>
        <Route path="basket" element={<BasketShopping></BasketShopping>} >  </Route>
        <Route path="register" element={<Register></Register>} > </Route>
        <Route path="addGame" element={<AddGame></AddGame>} >  </Route>
        <Route path="order" element={<Order></Order>} >  </Route>
        <Route path="areaPersonal" element={<AreaPersonal></AreaPersonal>} >  </Route>
        <Route path="detailsOrder/:id" element={<DetailsOrder></DetailsOrder>} >  </Route>
        <Route path="/" element={<Home></Home>} >  </Route>

    </Routes>
}