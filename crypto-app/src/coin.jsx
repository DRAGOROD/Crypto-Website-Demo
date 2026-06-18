import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinContext } from "./CoinContext";
import LineChart from "./lineChart";


function coin(){

 let {coinId}=useParams()
 let [coinData,setCoinData]=useState()
 let {currency}=useContext(coinContext)
let [historicalData,setHistoricalData]=useState()

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

async function fetchHistoricalData(){
 fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=14&interval=daily`, {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'x-cg-demo-api-key': 'CG-MMfNsiSkDJWtroWY1ruRtqMA'
  }
})
  .then(response => response.json())
  .then(response => setHistoricalData(response))
  .catch(error => console.error('Error:', error));

}


 useEffect(()=>{
    fetchCoinData()
    fetchHistoricalData()
 },[currency])

 if(coinData && historicalData){

    return (

        <div>
          <div id="coinpage-head">
            
            <p id="coinpage-heading">
              <img src={coinData.image.large} id="coinpage-icon"/>
              {coinData.symbol.toUpperCase()}/<span id="coinpage-currencysymbol">{currency.name.toUpperCase()}</span></p>
            </div>
            <div id="coininfo-container">
            <LineChart historicalData={historicalData} />
            <div id="coin-info">
            <div><span>Market Rank:</span> #{coinData.market_cap_rank}</div>
            <hr/>
            <div><span>Current Prices:</span> {currency.symbol} {coinData.market_data.current_price[currency.name]}</div>
            <hr/>
            <div><span>24H High:</span> {currency.symbol} {coinData.market_data.high_24h[currency.name]}</div>
            <hr/>
            <div><span>24H Low:</span> {currency.symbol} {coinData.market_data.low_24h[currency.name]}</div>
            <hr/>
            <div><span>Launch Date:</span> {coinData.genesis_date?coinData.genesis_date:"NONE"}</div>
            <hr/>
            <div><span>Circulating supply:</span> {coinData.market_data.circulating_supply>1000000000?`${(coinData.market_data.circulating_supply/1000000000).toFixed(2)}B`:coinData.market_data.circulating_supply>1000000?`${(coinData.market_data.circulating_supply/1000000).toFixed(2)}M`:coinData.market_data.circulating_supply>1000?`${(coinData.market_data.circulating_supply/1000).toFixed(2)}K`:coinData.market_data.circulating_supply}</div>
            <hr/>
            <div><span>Websites:</span> {coinData.links.homepage}</div>
            <hr/>
            <div><span>Total Volume:</span> {currency.symbol} {coinData.market_data.total_volume[currency.name]>1000000000000?`${(coinData.market_data.total_volume[currency.name]/1000000000000).toFixed(2)}T`:coinData.market_data.total_volume[currency.name]>1000000000?`${(coinData.market_data.total_volume[currency.name]/1000000000).toFixed(2)}B`:coinData.market_data.total_volume[currency.name]>1000000?`${(coinData.market_data.total_volume[currency.name]/1000000).toFixed(2)}M`:coinData.market_data.total_volume[currency.name]>1000?`${(coinData.market_data.total_volume[currency.name]/1000).toFixed(2)}K`:coinData.market_data.total_volume[currency.name]}</div>
            <hr/>
            <div><span>Market Cap:</span> {currency.symbol} {coinData.market_data.market_cap[currency.name]>1000000000000?`${(coinData.market_data.market_cap[currency.name]/1000000000000).toFixed(2)}T`:coinData.market_data.market_cap[currency.name]>1000000000?`${(coinData.market_data.market_cap[currency.name]/1000000000).toFixed(2)}B`:coinData.market_data.market_cap[currency.name]>1000000?`${(coinData.market_data.market_cap[currency.name]/1000000).toFixed(2)}M`:coinData.market_data.market_cap[currency.name]}</div>
            <hr/>
            <div id="buy-buttons">
              <div id="buy-btn">BUY</div>
              <div id="sell-btn">SELL</div>
            </div>
            </div>
            </div>
        </div>
    )

 }else{
    <div>Loading...</div>
 }
    

}

export default coin;