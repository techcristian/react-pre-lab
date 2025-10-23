import './Item.css'
export const Item = ({name,description,price,imageUrl,children})=>{
  return <article> 
    <img src={imageUrl} alt={description}/>
    <h1>{name}</h1>
    <p>Precio: ${price}</p>
    <p>Description: {description}</p>
    {children}
  </article>
}