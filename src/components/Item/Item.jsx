import './Item.css'
import { useEffect } from "react";
import 'spoilerjs/spoiler-span';
import { formatPrice } from '../../libs/format.price'
import { Link } from "react-router-dom"

export const Item = ({ id, name, description, price, imageUrl, children }) => {

  return <article key={id}>
    <img src={imageUrl} alt={description} />
    <h1>{name}</h1>
     <div className="price-section">
      <p className="price-old">Precio: {formatPrice(price)}</p>
      <p className="price-off">Oferta - 10%: {formatPrice(price * 0.9)}</p>
    </div>
    <p>Description: {description}</p>
    <Link to={`/detail/${id}`}>{children}</Link>
  </article>

}
 /* useEffect(() => {
    // Importa dinámicamente el JS que inicializa los spoilers
    import('spoilerjs').then(module => {
      module.initSpoilers(); //  activa el efecto
    });
  }, []);*/
/* <p>Precio:<spoiler-span>{formatPrice(price)}</spoiler-span></p>*/