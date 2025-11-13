import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/serviceProducts";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
      .then((data) => {
        setProducts(data);
      }
      )
      .catch((err) => {
        console.log(err)
      })
  }, [category]);
  return (
    <section className="item-list-container">
      <ItemList list={products} />
    </section>
  )
}