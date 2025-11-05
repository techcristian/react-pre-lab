import './Item.css'
import { useEffect } from "react";
import 'spoilerjs/spoiler-span';
import { formatPrice } from '../../libs/format.price'
import { Link } from "react-router-dom"

export const Item = ({id,name,description,price,imageUrl,children})=>{
     useEffect(() => {
    // Importa dinámicamente el JS que inicializa los spoilers
    import('spoilerjs').then(module => {
      module.initSpoilers(); // 👈 activa el efecto
    });
  }, []);
  return <article key={id}> 
    <img src={imageUrl} alt={description}/>
    <h1>{name}</h1>
   <p>Precio:{formatPrice(price)}</p>
    <p>Description: {description}</p>
   <Link to={`/detail/${id}`}>{children}</Link> 
  </article>

}
/* <p>Precio:<spoiler-span>{formatPrice(price)}</spoiler-span></p>*/