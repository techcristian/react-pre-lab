
import { useCartContext } from "../../context/CartContex/useCartContext";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cart, deleteItem, ClearCart, priceTotal, checkOut } = useCartContext();

  return (
    <section className="cart-container">
      <h2>Carrito de compras</h2>

      {cart.length ? (
      <>
          <div className="cart-items">
            {cart.map((prod) => (
              <div key={prod.id} className="cart-item">
                <Item {...prod}>
                  <span>Cantidad: {prod.quantity}</span>
                  <button onClick={() => deleteItem(prod)} className="eliminar-prod">Eliminar productos</button>
                  <Link to={`/detail/${prod.id}`}><button className="ir-producto">Volver al producto</button></Link>
                </Item>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total a pagar: ${priceTotal()}</p>
            <button onClick={()=>checkOut()}>Finalizar compra</button>
           <Link to={"/"}> <button className="seguir">Seguir comprando</button></Link>
          </div>
     
     </>
      ) : (
        <div className="cart-empty">
          <p>Tu carrito está vacío</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      )}
    </section>
  );
};
