import { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };
  const addItem = (item) => {
    if (exists(item.id)) {
      alert("El producto ya existe en el carrito");
      return;
    }
    setCart([...cart, item]);
    alert(`Produnto: " ${item.name} " agregado al carrito`);
  }
  const ClearCart = () => {
    setCart([]);
  };
  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }
  }

  return <CartContext.Provider value={{ cart, setCart, addItem, ClearCart, getTotalItems }}>{children}</CartContext.Provider>
}