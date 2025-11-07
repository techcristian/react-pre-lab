
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
        {/*Lista de productos */}
        <div className="cart-items">
          {cart.map((prod) => {
            const isSumergible = prod.name.toLowerCase() === "casio sumergible";
            const discountPrice = isSumergible ? prod.price * 0.6 : prod.price * 0.9;
            const subtotal = discountPrice * prod.quantity;

            return (
              <div key={prod.id} className="cart-item">
                <p>Producto: {prod.name}</p>

                <p className="price-old">Precio: {formatPrice(prod.price)}</p>
                <p className="price-off-cart">
                  {isSumergible
                    ? `Oferta -40%: ${formatPrice(discountPrice)}`
                    : `Oferta -10%: ${formatPrice(discountPrice)}`}
                </p>

                <p>Cantidad: {prod.quantity}</p>
                <p className="subtotal">
                  Subtotal: {formatPrice(subtotal)}
                </p>

                <div className="cart-buttons">
                  <button
                    onClick={() => deleteItem(prod)}
                    className="eliminar-prod"
                  >
                    Eliminar producto
                  </button>
                  <Link to={`/detail/${prod.id}`}>
                    <button className="ir-producto">Volver al producto</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/*Resumen total */}
        <div className="cart-summary">
          <p>
            Total a pagar:{" "}
            {formatPrice(priceTotal())     
            }
          </p>

          <button onClick={checkOut}>Finalizar compra</button>
          <Link to={"/"}>
            <button className="seguir">Seguir comprando</button>
          </Link>
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
