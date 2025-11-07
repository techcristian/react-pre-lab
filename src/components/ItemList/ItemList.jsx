
import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import './ItemList.css'

export const ItemList = ({list}) =>{
  return <>
  {list.length ? ( list.map(prod => (
 <Link className="links-itemList" to={`/detail/${prod.id}`} key={prod.id}> <Item item {...prod}>
    <button className="btn-item">Ir a detalles</button>
  </Item></Link>
 )))
  :
  (<p>No hay productos</p>)
}
  </>
}