import './Item.css'
import 'spoilerjs/spoiler-span';
import { formatPrice } from '../../libs/format.price'
import { motion } from "framer-motion"


export const Item = ({ name, description, price, imageUrl, children }) => {

  return (
    <motion.div
      whileHover={{ scale:1.04 }}
      transition={{ duration: 0.2 }}
    >
      <article>

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
    </motion.div>

  )



}
