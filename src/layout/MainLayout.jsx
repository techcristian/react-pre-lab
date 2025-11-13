import { Outlet } from "react-router-dom"
import { Nav } from "../components/Nav/Nav"
import { Footer } from "../components/Footer/Footer"


export const MainLayout = () => {
  return (
    <>
      <Nav/>
      <div>
        <Outlet/>
      </div>
       <Footer />
    </>
  )
}