import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { getProductsById } from "../../services/serviceProducts";
import "./ItemDetailContainer.css"


export const ItemDetailContainer = () => {
const [detail, setDetail] = useState({});
const {id} = useParams();

useEffect(() => {
getProductsById(id)
 
  .then((data) => {
      setDetail(data);
  })
  .catch((err) => {
    console.log(err);
  })
},[id]);

return  (
    <section className="item-detail-container">
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