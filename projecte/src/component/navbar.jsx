import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Navbar = () => {
  let isManager = useSelector(x => x.dataClientReducer.isManager)
  return <ul className="nav justify-content-center pastel-menu">
    <img className="menu-logo" src="../logo.png" alt="" />
    <li class="nav-item">
      <Link className="nav-link" to={'home'}>  דף הבית    </Link>
    </li>
    {!isManager && <li class="nav-item">
      <Link className="nav-link" to={'register'}> הירשם </Link>
    </li>}
    <li class="nav-item">
      <Link className="nav-link" to={'login'}>  התחברות    </Link>
    </li>
    <li class="nav-item">
      <Link className="nav-link" to={'mylistCategory'}>רשימת קטגוריות  </Link>
    </li>
    {isManager && <li className="nav-item">
      <Link className="nav-link" to={'myaddCategory'}>הוספת קטגוריה </Link>
    </li>}
    <li class="nav-item">
      <Link className="nav-link" to={'myListGame'}> רשימת משחקים    </Link>
    </li>
    {isManager && <li class="nav-item">
      <Link className="nav-link" to={'addGame'}>   הוספת משחק    </Link>
    </li>}
    <li class="nav-item">
      <Link className="nav-link" to={'basket'}> סל קניות  </Link>
    </li>
    <li class="nav-item">
      <Link className="nav-link" to={'areaPersonal'}>  איזור אישי    </Link>
    </li>
  </ul>

}


