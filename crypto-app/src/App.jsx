import Navbar from './navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './homepage'
import Coin from './coin'
import AboutUs from './aboutUs'
function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <AboutUs/>
    </>
  )
}

export default App
