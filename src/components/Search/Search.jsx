
import { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import { getProductsBySearch } from "../../services/serviceProducts";
import {Item} from "../Item/Item"
import "./Search.css";

export const SearchResults = () => {

  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    getProductsBySearch(query).then((r) => {
      setResults(r);
    });
  }, [query]);
return(
   <section className="search-results-section">
      <div className="product-grid">
        {results?.length ? (
          results.map((p) => (
           <Link className="links-searchList" to={`/detail/${p.id}`} key={p.id}> 
          <Item item {...p}>
             <button>Ir a detalles</button>
          </Item>
            </Link>
          ))
        ) : (
          <p className="no-results">No se encontraron productos</p>
        )}
      </div>
    </section>
)
}

