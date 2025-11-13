import { useCartContext } from "../../context/CartContex/useCartContext"
import { Count } from "../Count/Count";
import { formatPrice } from "../../libs/format.price";

export const ItemDetail = ({ detail }) => {

  const { addItem } = useCartContext();

  const handleAdd = (quantity) => {
    addItem({ ...detail, quantity })
  }

  return (
    <>
      <article key={detail.id}>
        <img src={detail.imageUrl} alt={detail.description} />
        <h1>{detail.name}</h1>
        <div className="price-section">
          <p className="price-old">Precio: {formatPrice(detail.price)}</p>
         {detail.name === "Casio Sumergible" ? (
        <p className="price-off">
          Oferta - 40%: {formatPrice(detail.price * 0.6)}
        </p>
      ) : (
        <p className="price-off">
          Oferta - 10%: {formatPrice(detail.price * 0.9)}
        </p>
      )}
        </div>
        <p>Description: {detail.description}</p>
       
      </article>

      <Count onConfirm={handleAdd} />

    </>
  )

}
