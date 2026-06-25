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

{/*setting up the coin changing values*/} 
  function currencyHandler(e){

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

{/*setting up veriables to store the Refs value for navigation*/}
let homeRef=useRef(null)
let marketRef=useRef(null)
let aboutUsRef=useRef(null)

    return (
      <>
        <div id="nav-container">
          {/*setting up link to go back home */}
          <Link to={`/Crypto-Website-Demo/`} id="site-logo">
          <img src={SiteLogo} alt="Conify Logo"/>
          </Link>
          {/*setting up navbar*/}
            <div id="nav-links">
              <Link to={`/Crypto-Website-Demo/`} className="nav-options" onClick={()=>homeRef.current.scrollIntoView({behavior:"smooth"})}>Home</Link>
              <div  className="nav-options" onClick={()=>marketRef.current.scrollIntoView({behavior:"smooth"})}>Market</div>
              <div  className="nav-options" onClick={()=>aboutUsRef.current.scrollIntoView({behavior:"smooth"})}>About Us</div>
            </div>
            {/*setting up the currency changing option*/}
            <select id="currency-box" onChange={currencyHandler}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
            <div id="login-btn">Login</div>
        </div>
        <hr id="nav-separator"/>
    {/*setting up heroSection within Nav file for navigation*/}
    <div ref={homeRef}>
      <HeroSec/>
    </div>  
    {/*setting up homePage and Coin within Nav file for navigation*/}
    <div ref={marketRef}>
      {/*setting up homePage and Coins routes*/}
      <Routes>
      <Route path='/Crypto-Website-Demo/' element={<Homepage/>}/>
      <Route path='/Crypto-Website-Demo/coin/:coinId' element={<Coin/>}/>
      </Routes>
    </div> 
    {/*setting up About us within Nav file for navigation*/}
    <div ref={aboutUsRef}>
      <AboutUs/>
    </div>
        </>
    )
}

export default Navbar