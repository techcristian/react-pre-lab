import { useState } from 'react'
import { CartContext } from './CartContext'
import { formatPrice } from '../../libs/format.price';



export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Confirmar si exite item en el carrito
  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  //Agregar producto en carrito
  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      alert(`¿Confirmas agregar ${item.quantity} ${item.name} mas al carrito?`);
    } else {
      setCart([...cart, item]);
      alert(`¿Confirmas agregar ${item.quantity} ${item.name} al carrito?`);
    }
  };

  // Eliminar producto del carrito
  const deleteItem = (item) => {
    const filtered = cart.filter((p) => p.id != item.id);
    setCart(filtered);
    alert(`¿Confirmas borrar ${item.name} del carrito?`);
  };

  // Vaciar carrito
  const ClearCart = () => {
    setCart([]);
  };

  // Calcular total de Items en carrito
  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  }

  // precio total del carrito
  const priceTotal = () => {
    return  cart.reduce((acc, prod) => {
                const isSumergible = prod.name.toLowerCase() === "casio sumergible";
                const discountPrice = isSumergible ? prod.price * 0.6 : prod.price * 0.9;
                return acc + discountPrice * prod.quantity;
              }, 0)
  };

  //  checkOut estado cart y priceTotal()
  const checkOut = () => {
    const ok = confirm(`¿Seguro que desea continuar con la compra?`);
    if (ok) {
      let resumen = "Resumen de tu compra:\n\n";

      cart.forEach((p) => {
         const isSumergible = p.name.toLowerCase() === "casio sumergible";
        isSumergible ? resumen += `Item: ${p.name} - Oferta 40%: ${formatPrice(p.price * 0.6)} - cant: (${p.quantity}) = ${formatPrice((p.price * 0.6) * p.quantity)}\n`: resumen += `Item: ${p.name} - Oferta 10%: ${formatPrice(p.price * 0.9)} - cant: (${p.quantity}) = ${formatPrice((p.price * 0.9) * p.quantity)}\n`;
       

      });
      resumen += `\n Total a pagar: $${formatPrice(priceTotal())}`;
      alert(resumen);
      // Limpia el carrito
      ClearCart();
    }

  };
 

  return <CartContext.Provider value={{ cart, setCart, addItem, ClearCart, getTotalItems, deleteItem, priceTotal, checkOut }}>{children}</CartContext.Provider>
}