

import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import { motion } from "framer-motion"
import './ItemList.css'

export const ItemList = ({ list }) => {
  return (
    <>
      {list.length ? (
        list.map((prod, i) => (
          <motion.div
           key={prod.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }} // 👈 efecto en cascada*/
            /*  key={prod.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.2,   // Delay escalonado 🟢
              ease: "easeOut",
            }}*/
          >
            <Link className="links-itemList" to={`/detail/${prod.id}`}>
              <Item {...prod}>
                <button className="btn-item">Ir a detalles</button>
              </Item>
            </Link>
          </motion.div>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </>
  )
}
