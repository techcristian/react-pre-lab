import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al encontrar un producto");
        }
        return res.json();
      })
      .then((data) => {

     if(category){
      const filteredCategory = data.filter((prod) => prod.category === category);
         setProducts(filteredCategory);
     }else{
      setProducts(data);
     }
      })
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