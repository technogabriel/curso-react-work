import {Route, Routes, BrowserRouter} from 'react-router-dom'
import  Navbarlayout  from './components/Layout/NavbarLayout'
import  Home  from './pages/Home'
import Product from './pages/Product'
import FooterLayout from './components/Layout/FooterLayout'
import "./index.css"
import HeaderLayout from './components/Layout/HeaderLayout'
import Users from './components/Users/Users'




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
        </Routes>
            <FooterLayout/>
      </BrowserRouter>
     

     
    </>
  )
}

export default App
