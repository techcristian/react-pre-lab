
import { Item } from "../Item/Item"
import './ItemList.css'

export const ItemList = ({list}) =>{
  return <>
  {list.length ? ( list.map((prod) => (
  <Item item {...prod}>
    <button className="btn-item">Ir a detalles</button>
  </Item>
 )))
  :
  (<p>No hay productos</p>)
}
  </>
}