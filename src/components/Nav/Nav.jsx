import { Link } from "react-router-dom"
import "./Nav.css"
import 'spoilerjs/spoiler-span';
import { useCartContext } from '../../context/CartContex/useCartContext';


export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid">

        <Link to={"/"} class="navbar-brand">Watch Shop</Link>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <p class="navbar-toggler-icon"></p>
        </button>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={"/"} class="nav-link active" aria-current="page" >  Home</Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul class="dropdown-menu">
                <li ><Link to={"/category/analogico"} class="dropdown-item"  >  Analogico</Link> </li>
                <li><Link to={"/category/deportivo"} class="dropdown-item">  Deportivo</Link></li>
                <li><Link to={"/category/digital"} class="dropdown-item">  Digital</Link></li>
                <li><Link to={"/category/sumergible"} class="dropdown-item">  Sumergible</Link></li>
              </ul>
            </li>

          </ul>
         <form class="d-flex" role="search">
           <div className="div-form">
             <input
              className="btm-form-input"
              type="search"
              placeholder="Fijate en Watch Shop"
              aria-label="Search"
            />
            <button class="btn btn-sm btn-outline-primary" type="submit">
              Buscar
            </button>
           </div>
          </form>

          <div className="cart-container">
            <Link to="/carrito" className="nav-link position-relative">
              <span className="fs-6 text-secondary me-1"
              >carrito</span> 🛒
              {getTotalItems() > 0 && (
                <span className="cart-count">{getTotalItems()}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}



/*useEffect(() => {
   // Importa dinámicamente el JS que inicializa los spoilers
   import('spoilerjs').then(module => {
     module.initSpoilers(); // 👈 activa el efecto
   });
 }, []);*/