
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductsBySearch } from "../../services/serviceProducts";
import "./Search.css";

export const SearchResults = () => {

  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  console.log("QUERY DESDE LA URL:", query); // 👈 VER SI LLEGA

  useEffect(() => {
    if (!query) {
      console.log("No hay query, devolviendo vacío");
      setResults([]);
      return;
    }

    getProductsBySearch(query).then((r) => {
      console.log("RESULTADOS DEL SERVICE:", r);
      setResults(r);
    });
  }, [query]);

  return (
    <section className="search-results-section">
      <div className="product-grid">
        {results?.length ? (
          results.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.imageUrl} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No se encontraron productos</p>
        )}
      </div>
    </section>
  )
}