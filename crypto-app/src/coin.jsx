import React, { useContext, useEffect, useState } from "react";
{/*Importing Params to track Coin Id */}
import { useParams } from "react-router-dom";
{/*Importing coinContext's value from CoinContext file*/}
import { coinContext } from "./CoinContext";
{/*Importing Chart details */}
import LineChart from "./lineChart";
{/*Importing Skeleton */}
import SkeletonCoinPage from "./skeletonCoinPage"

function coin(){

{/*destructing and storing coinId */}
 let {coinId}=useParams()
 {/*storing coin info */}
 let [coinData,setCoinData]=useState()
 {/*Importing currency from coinContext file */}
 let {currency}=useContext(coinContext)
{/*creating data for Coin Charts*/}
let [historicalData,setHistoricalData]=useState()

{/*fetching coin details with coinID*/}
 async function fetchCoinData(){
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'x-cg-demo-api-key': 'CG-MMfNsiSkDJWtroWY1ruRtqMA'
  }
})
  .then(response => response.json())
  .then(response => setCoinData(response)) /*setting the response into CoinData;
  .catch(error => console.error('Error:', error));
 }

 {/*Fetching Chart Data*/}
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

 {/*if the data fetching are successful*/}
 if(coinData && historicalData){

    return (

        <div>
          <div id="coinpage-head">
            {/*coin heads */}
            <p id="coinpage-heading">
              <img src={coinData.image.large} id="coinpage-icon"/>
              {coinData.symbol.toUpperCase()}/<span id="coinpage-currencysymbol">{currency.name.toUpperCase()}</span></p>
            </div>
            <div id="coininfo-container">
              {/*placing the line chart */}
            <LineChart historicalData={historicalData} />
            {/*other coin details*/}
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
  {/*if the data fetching aren't successful load Skeleton */}
   return <SkeletonCoinPage/>
 }
    

}

export default coin;