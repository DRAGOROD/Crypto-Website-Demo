import Navbar from './navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './homepage'
import Coin from './coin'
import AboutUs from './aboutUs'
import Footer from './footer'
function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default App
