import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from './components/Nav/Nav'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'
import { CartProvider } from "./context/CartContex/CartProvider"
import { Footer } from "./components/Footer/Footer"

function App() {


  return (
    <>
      <BrowserRouter>
      <CartProvider>
         <Nav />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/detail/:id"} element={<ItemDetailContainer />} />
        </Routes>
         <Footer />
      </CartProvider>
     

      </BrowserRouter>
    </>
  )
}

export default App
