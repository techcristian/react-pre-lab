import { Link } from "react-router-dom"
import './Nav.css'

import {useCartContext} from '../../context/CartContex/useCartContext';
export const Nav = () => {
  const {getTotalItems} = useCartContext();
  return (
    <nav>
    <ul>
      <li><Link to={"/"}>  Home</Link> </li>
      <li><Link to={"/categoy/analogico"}>  Analogico</Link> </li>
      <li><Link to={"/categoy/deportivo"}>  Deportivo</Link> </li>
      <li><Link to={"/categoy/digital"}>  Digital</Link> </li>
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