import {Route, Routes, BrowserRouter} from 'react-router-dom'
import  Login  from './components/Login/Login'
import  {ProductList}  from './components/Products/ProductList'
import "./index.css"
import Users from './components/Users/Users'
import ProductItemId from './components/Products/Product/ProductItemId'
import Page from './page/Page'
import Home from './components/Home/Home'
import UserById from './components/Users/User/UserById'


function App() {

  return (
    <>
        <Page> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/users' element={<Users />} />
          <Route path= 'products/:id' element={<ProductItemId />} />
          <Route path='/users/:userId' element={<UserById />} />
        </Routes>
        </Page>
    </>
  )
}

export default App
