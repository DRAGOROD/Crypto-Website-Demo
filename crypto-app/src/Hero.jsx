import React, { useContext, useEffect, useState } from "react";
import { coinContext } from "./CoinContext";

function Hero(){

let {allCoin,currency}=useContext(coinContext);
let [showCoin,setShowCoin]=useState([])

useEffect(()=>{
    setShowCoin(allCoin);
},[allCoin])


return (
    <>
    <h1 id='hero-heading'>TRACKS & <span>TRADE</span></h1>
    <div id="icon-container">
        {showCoin.slice(0,4).map((item,index)=>(
            <div key={index} className="hero-coin">
                <img src={item.image} alt="Coin-Icon"/>
                <div><span>{item.name}</span>  <span className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100} %</span></div>
                <p>{currency.symbol} {item.current_price}</p>
            </div>
        ))}
    </div>
    </>
)

}

export default Hero;