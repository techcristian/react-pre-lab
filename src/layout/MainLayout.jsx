import { Outlet, useLocation } from "react-router-dom"
import { Nav } from "../components/Nav/Nav"
import { Footer } from "../components/Footer/Footer"
import { Carousel } from "../components/Carousel/Carousel"
import {CarouselPeople} from "../components/Carousel/CarouselPeople"


export const MainLayout = () => {
  const location = useLocation()
  return (
    <>
      <Nav />
       {location.pathname === "/" && <div className="carousel-wrapper-people">
        <CarouselPeople />
      </div>}
    
      <div>
        <Outlet />
      </div>
          {location.pathname === "/" && <div className="carousel-wrapper">
        <Carousel />
      </div>
      }
     
      <Footer />
    </>
  )
}