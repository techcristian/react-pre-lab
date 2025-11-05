import { useState } from "react"
import './Count.css'
import { Link } from "react-router-dom";

export const Count = ({ btnText, onConfirm }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1)
  }
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }
 const confirm = () => count > 0 && onConfirm(count);

/*const confirm = () =>{
  if(count > 0){
    onConfirm(count);
    setCount(0);
  }
}*/

  return (
 
    <div class="count-container">
      <div class="count-buttons" >
        <button className="btn" onClick={decrement} disabled={count === 0}>-</button>
        <p>{count}</p>
        <button className="btn" onClick={increment}>+</button>
      </div>

      <button className="btn" onClick={confirm} disabled={count === 0}>{btnText}</button>

     <div className="btn-links">
       <Link to={"/carrito"}><button className="ir-carrito" >{"Carrito"}</button></Link>
       <Link to={"/"}><button className="ir-home" >{"Volver"}</button></Link>
     </div>
   
    </div>

  )
}