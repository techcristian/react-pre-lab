import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () =>{
  const [products, setProducts] = useState([]);
  useEffect(()=>{
fetch("/data/products.json")
.then((res)=>{
  if(!res.ok){
    throw new Error("Hubo un problema al encontrar un producto");
  }
  return res.json();
})
.then((data)=>{
  setProducts(data);
})
.catch((err)=>{
  console.log(err)
})
  },[]);
  return (
    <section>
     <ItemList list={products}/>
    </section>
  )
}