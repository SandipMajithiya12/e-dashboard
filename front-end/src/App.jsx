

import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/login'
import AddProduct from './components/AddProduct'
import Products_list from './components/Products_list'
import UpdateProduct from './components/UpdateProduct'


function App() {
 

  return ( 
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element ={<PrivateComponent />}>
        
        <Route path='/' element={<Products_list />}/>
        <Route path='/add' element={<AddProduct />}/>
        <Route path='/update/:id' element={<UpdateProduct />}/>
        <Route path='/logout' element={<h1>logout</h1>}/>
        <Route path='/profile' element={<h1>profile</h1>}/>


        </Route>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>


      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
