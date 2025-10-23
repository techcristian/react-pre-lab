import { useCartContext } from "../../context/CartContex/useCartContext"
import { Item } from "../Item/Item"

export const ItemDetail = ({ detail }) => {

 const {addItem}= useCartContext();
  return (
    <>
      <Item {...detail}>
        <button onClick={ () =>addItem(detail) }>Enviar al carrito</button>
      </Item>
    </>
  )




}