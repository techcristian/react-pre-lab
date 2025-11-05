import { Link } from "react-router-dom"
import './Nav.css'
import { useEffect } from "react";
import 'spoilerjs/spoiler-span';
import { useCartContext } from '../../context/CartContex/useCartContext';

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  /*useEffect(() => {
    // Importa dinámicamente el JS que inicializa los spoilers
    import('spoilerjs').then(module => {
      module.initSpoilers(); // 👈 activa el efecto
    });
  }, []);*/

  return (
    <nav>
      
        <Link to="/">
          <span className="span-logo">
             Casio Store
          </span>
        </Link>
      
      <ul>

        <li><Link to={"/category/analogico"}>  Analogico</Link> </li>
        <li><Link to={"/category/deportivo"}>  Deportivo</Link> </li>
        <li><Link to={"/category/digital"}>  Digital</Link> </li>
        <li><Link to={"/carrito"}>  Carrito </Link>
          {
            getTotalItems() > 0 && (
              <span >{getTotalItems()}</span>
            )
          }
        </li>

      </ul>
    </nav>
  )
} 