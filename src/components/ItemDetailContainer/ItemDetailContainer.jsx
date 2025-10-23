import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {ItemDetail} from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
const [detail, setDetail] = useState({});
const {id} = useParams();

useEffect(() => {
 fetch("/data/products.json")
  .then((res) => {
    if(!res.ok){
      throw new Error("No se encontro ningun producto");
    }
    return res.json();
  })
  .then((data) => {
    const foundProduct = data.find((p) => p.id === id);
    if(foundProduct){
      setDetail(foundProduct);
    } else{
        throw new Error("No se encontro ningun producto");
    }
  })
  .catch((err) => {
    console.log(err);
  })
},[id]);


return  (
    <section>
      {Object.keys(detail).length ? 
    (
        <ItemDetail detail={detail} />
    ):(
      <p>cargando ...</p>
    )  
    }
   
    </section>
  ) 
}