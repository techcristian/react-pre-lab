import './Item.css'
import { useEffect } from "react";
import 'spoilerjs/spoiler-span';
import { formatPrice } from '../../libs/format.price'


export const Item = ({  name, description, price, imageUrl, children }) => {

  return <article>
    <img src={imageUrl} alt={description} />
    <h1>Modelo: {name}</h1>
    <div className="price-section">
      <p className="price-old">Precio: {formatPrice(price)}</p>
      {name.toLowerCase() === "casio sumergible" ? (
        <p className="price-off">
          Oferta - 40%: {formatPrice(price * 0.6)}
        </p>
      ) : (
        <p className="price-off">
          Oferta - 10%: {formatPrice(price * 0.9)}
        </p>
      )}


    </div>
    <p>Description: {description}</p>
    {children}
  </article>

}
/* useEffect(() => {
   // Importa dinámicamente el JS que inicializa los spoilers
   import('spoilerjs').then(module => {
     module.initSpoilers(); //  activa el efecto
   });
 }, []);*/
/* <p>Precio:<spoiler-span>{formatPrice(price)}</spoiler-span></p>*/