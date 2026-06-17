import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinContext } from "./CoinContext";
function coin(){
 let {coinId}=useParams()
 let [coinData,setCoinData]=useState()
 let {currency}=useContext(coinContext)

 async function fetchCoinData(){

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'x-cg-demo-api-key': 'CG-MMfNsiSkDJWtroWY1ruRtqMA'
  }
})
  .then(response => response.json())
  .then(response => setCoinData(response))
  .catch(error => console.error('Error:', error));

 }


async function fetchCharData(){
 fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14', {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'x-cg-demo-api-key': 'CG-MMfNsiSkDJWtroWY1ruRtqMA'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

}


 useEffect(()=>{
    fetchCoinData()
 },[currency])

 if(coinData){

    return (
        <div>
            <img src={coinData.image.large}/>
            <p>{coinData.name} {coinData.symbol.toUpperCase()}</p>
        </div>
    )

 }else{
    <div>Loading...</div>
 }
    

}

export default coin;