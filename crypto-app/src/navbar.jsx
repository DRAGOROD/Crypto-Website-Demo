import { useContext, useRef } from 'react'
import SiteLogo from './Assets/Coinify Logo.png'
import { coinContext } from './CoinContext'
import { Link } from 'react-router-dom';
import HeroSec from'./Hero'
import Homepage from './homepage'
import Coin from './coin'
import AboutUs from './aboutUs'
import { Routes, Route } from 'react-router-dom'

function Navbar(){
  let {setCurrency}=useContext(coinContext);

  function currencyHandler(e){

   /*Coin Changing*/ 
   switch(e.target.value){
    case "usd":{
      setCurrency({name:"usd",symbol:"$"});
      break;
    }
    case "eur":{
      setCurrency({name:"eur",symbol:"€"});
      break;
    }
    case "inr":{
      setCurrency({name:"inr",symbol:" ₹"});
      break;
    }
    default:{
      setCurrency({name:"usd",symbol:"$"});
      break;
    }
   }
  }

let homeRef=useRef(null)
let marketRef=useRef(null)
let aboutUsRef=useRef(null)

    return (
      <>
        <div id="nav-container">
          <Link to={`/`} id="site-logo">
          <img src={SiteLogo} alt="Conify Logo"/>
          </Link>
            <div id="nav-links">
              <Link to={`/`} className="nav-options" onClick={()=>homeRef.current.scrollIntoView({behavior:"smooth"})}>Home</Link>
              <div  className="nav-options" onClick={()=>marketRef.current.scrollIntoView({behavior:"smooth"})}>Market</div>
              <div  className="nav-options" onClick={()=>aboutUsRef.current.scrollIntoView({behavior:"smooth"})}>About Us</div>
            </div>
            <select id="currency-box" onChange={currencyHandler}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
            <div id="login-btn">Login</div>
        </div>
        <hr/>
    <div ref={homeRef}>
      <HeroSec/>
    </div>  
    <div ref={marketRef}>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
    </div> 
    <div ref={aboutUsRef}>
      <AboutUs/>
    </div>
        </>
    )
}

export default Navbar