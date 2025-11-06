
import { useCartContext } from "../../context/CartContex/useCartContext";
import { Link } from "react-router-dom";
import "./cart.css";
import { formatPrice } from "../../libs/format.price";

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
                <p>Producto: {prod.name}</p>
                <p className="price-off">Oferta -10%: {formatPrice(prod.price * 0.9)}</p>
                <p>Cantidad: {prod.quantity}</p>
                <p>Sub-Total: {formatPrice((prod.price * 0.9) * prod.quantity)}</p>
                <div className="cart-buttons">
                  <button onClick={() => deleteItem(prod)} className="eliminar-prod">Eliminar productos</button>
                  <Link to={`/detail/${prod.id}`}><button className="ir-producto">Volver al producto</button></Link>
                </div>

              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total a pagar: {formatPrice(priceTotal())}</p>
            <button onClick={() => checkOut()}>Finalizar compra</button>
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
