import {Route, Routes, BrowserRouter} from 'react-router-dom'
import  Navbarlayout  from './components/Layout/NavbarLayout'
import  Home  from './views/ViewHome'
import Product from './views/ViewProduct'
import FooterLayout from './components/Layout/FooterLayout'
import "./index.css"
import HeaderLayout from './components/Layout/HeaderLayout'
import Users from './components/Users/Users'
import ProductItemId from './components/Products/Product/ProductItemId'





function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderLayout />
        <Navbarlayout />         
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/users' element={<Users />} />
          <Route path= 'products/:id' element={<ProductItemId />} />
         
        </Routes>
            <FooterLayout/>
      </BrowserRouter>
     

     
    </>
  )
}

export default App
