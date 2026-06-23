import { useContext } from 'react'
import SiteLogo from './Assets/Coinify Logo.png'
import { coinContext } from './CoinContext'
import { Link } from 'react-router-dom';
function Navbar(){
  let {setCurrency}=useContext(coinContext);

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

    return (
      <>
        <div id="nav-container">
          <Link to={`/`} id="site-logo">
          <img src={SiteLogo} alt="Conify Logo"/>
          </Link>
            <div id="nav-links">
              <Link to={`/`} className="nav-options">Home</Link>
              <div  className="nav-options">Market</div>
              <div  className="nav-options">About Us</div>
            </div>
            <select id="currency-box" onChange={currencyHandler}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
            <div id="login-btn">Login</div>
        </div>
        <hr/>
        </>
    )
}

export default Navbar