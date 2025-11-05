import { Link } from "react-router-dom"
import logo from "../../../public/images/casio-sumergible.webp"
import './Nav.css'

import {useCartContext} from '../../context/CartContex/useCartContext';
export const Nav = () => {
  const {getTotalItems} = useCartContext();
  return (
    <nav>
        <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo de la tienda" className="logo-img" />
        </Link>
       <Link to={"/"}> <h1 className="logo-text">CasioStore</h1></Link>
      </div>
    <ul>
     
      <li><Link to={"/category/analogico"}>  Analogico</Link> </li>
      <li><Link to={"/category/deportivo"}>  Deportivo</Link> </li>
      <li><Link to={"/category/digital"}>  Digital</Link> </li>
      <li><Link to={"/carrito"}>  Carrito </Link> 
      {
        getTotalItems() > 0 && (
        <span >{getTotalItems()}</span>
      )
      }
      </li>

    </ul>
  </nav>
  )
} 