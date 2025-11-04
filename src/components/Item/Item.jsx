import './Item.css'
import { formatPrice } from '../../libs/format.price'
export const Item = ({name,description,price,imageUrl,children})=>{
  return <article> 
    <img src={imageUrl} alt={description}/>
    <h1>{name}</h1>
    <p>Precio:<span>{formatPrice(price)}</span> </p>
    <p>Description: {description}</p>
    {children}
  </article>

}