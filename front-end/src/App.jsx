

import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import PrivateComponent from './components/PrivateComponent'


function App() {
 

  return ( 
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element ={<PrivateComponent />}>
        
        <Route path='/' element={<h1>product</h1>}/>
        <Route path='/add' element={<h1>add</h1>}/>
        <Route path='/update' element={<h1>update</h1>}/>
        <Route path='/logout' element={<h1>logout</h1>}/>
        <Route path='/profile' element={<h1>profile</h1>}/>


        </Route>
        <Route path='/signup' element={<Signup />}/>
        


      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
