import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'
import { CartProvider } from "./context/CartContex/CartProvider"

import { Cart } from './components/cart/cart'
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer"

import { MainLayout } from "./layout/MainLayout";
import { AdminLayout } from "./layout/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida"

import { Login } from "./components/Login/Login"
import { SearchResults } from "./components/Search/Search"

function App() {

  return (
    < >
      <BrowserRouter>
        <CartProvider>

          <Routes>

            <Route element={<MainLayout />}>
              {/*Ruta Inicio */}
              <Route path={"/"} element={<ItemListContainer />} />
              {/* Ruta detalle */}
              <Route path={"/detail/:id"} element={<ItemDetailContainer />} />
              {/* Ruta filtar por categoria */}
              <Route path={"/category/:category"} element={<ItemListContainer />} />
              {/* Ruta carrito */}
              <Route path={"/carrito"} element={<Cart />} />
              {/* 👉 Ruta para resultados de búsqueda */}
              <Route path={"/search"} element={<SearchResults />} />
            </Route>

            {/* Rura administardor */}
            <Route path={"/admin"} element={<AdminLayout />} >
              <Route index element={<Login/>} />
              <Route path={"alta-productos"} element={
                <RutaProtegida>
                  <ProductFormContainer />
                </RutaProtegida>
              } />
            </Route>

          </Routes>

        </CartProvider>


      </BrowserRouter>
    </>
  )
}

export default App
