import Navbar from './navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './homepage'
import Coin from './coin'
function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
    </>
  )
}

export default App
