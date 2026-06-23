import Navbar from './navbar'
import Footer from './footer'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'


function App() {
  
  return (
    <>
    <SkeletonTheme baseColor='#c9c5c5' highlightColor='#a4c005'>
      <Navbar/>
      <Footer/>
    </SkeletonTheme>
    </>
  )
}

export default App
