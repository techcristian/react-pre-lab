
import { useCartContext } from "../../context/CartContex/useCartContext";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./Cart.css";

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
                  <button onClick={() => deleteItem(prod)}>Eliminar</button>
                </Item>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total a pagar: ${priceTotal()}</p>
            <button onClick={()=>checkOut()}>Finalizar compra</button>
            <button onClick={()=>ClearCart()}>Vaciar carrito</button>
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
