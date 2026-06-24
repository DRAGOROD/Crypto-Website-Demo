import Navbar from './navbar'
import Footer from './footer'
{/*Importing Skeleton */}
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'


function App() {
  
  return (
    <>
   {/*Skeleton Tag*/}
    <SkeletonTheme baseColor='#a8a4a4' highlightColor='#88a002'>
      <Navbar/>
      <Footer/>
    </SkeletonTheme>
    </>
  )
}

export default App
