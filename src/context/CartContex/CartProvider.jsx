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
      const updatedCart = cart.map((prod)=>{
        if(prod.id === item.id){
          return {...prod, quantity : prod.quantity + item.quantity};
        }else{
          return prod;
        }
      });
    setCart(updatedCart);
    alert(`¿Confirmas agregar ${item.quantity} ${item.name} mas al carrito?`);
   
     
    } else {
      setCart([...cart, item]);
      alert(`¿Confirmas agregar ${item.quantity} ${item.name} al carrito?`);
    }

  }
  const ClearCart = () => {
    setCart([]);
  };
  const getTotalItems = () => {
  const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
  return totalItems;
  }

  return <CartContext.Provider value={{ cart, setCart, addItem, ClearCart, getTotalItems }}>{children}</CartContext.Provider>
}