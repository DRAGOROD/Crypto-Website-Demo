import React, { useContext, useEffect, useState } from "react";
import { coinContext } from "./CoinContext";
import HeroPic1 from './Assets/heropic1.png'
import HeroPic2 from './Assets/heropic2.png'
import HeroSkeleton from './heroSkeleton'

function Hero(){

{/*setting up veriables to store the coin details */}  
let {allCoin,currency}=useContext(coinContext);
{/*setting up veriables to show the coin details */}
let [showCoin,setShowCoin]=useState([])

useEffect(()=>{
setShowCoin(allCoin)
},[allCoin])

if(showCoin.length!==0){
return (
    <>
    <div id="hero-top">
    <img src={HeroPic1} id="righthero-pic" alt="Hero-Img" className="hero-img"/>
    <h1 id='hero-heading'>TRACKS & <span>TRADE</span></h1>
    <img src={HeroPic2} id="lefthero-pic" alt="Hero-Img" className="hero-img"/>
    </div>
    <div id="icon-container">
        {showCoin.slice(0,4).map((item,index)=>(
            <div key={index} className="hero-coin">
                <img src={item.image} alt="Coin-Icon" className="herocoin-Icon"/>
                <div><span>{item.name}</span>  <span className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100} %</span></div>
                <p>{currency.symbol} {item.current_price}</p>
            </div>
        ))}
    </div>
    </>
)
}else{
    return <HeroSkeleton/>
}
}

export default Hero;