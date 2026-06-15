import React from 'react'
import {useContext,useState,useEffect} from 'react'
import { coinContext } from './CoinContext'; {/* importing coinContext variable from CoinContext file */}
function homepage(){
    let {allCoin}=useContext(coinContext)
    let [displayCoin,setDisplayCoin]=useState([])
    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])
    return (
        <div id="page-container">
            <div id="search-container">
                <h3 id="search-heading">Look for the Best Performing Coins</h3>
                <form id="search-box">
                    <input type="text" placeholder="Search Crypto........" id="search-input-box"/>
                    <button type="submit" id="search-btn">&#x2315;</button>
                </form>
            </div>
            <div id="coin-table">
                <table>
                    <thead>
                      <tr className="table-layout">
                        <th>Coin</th>
                        <th id="price-th">Price</th>
                        <th>24H Change</th>
                        <th>Market Cap</th>
                      </tr>
                    </thead>
                    <tbody>
                    {displayCoin.slice(0,10).map((item,index)=>(
                            <tr className="table-layout" key={index}>
                                <td className="coin-deatils-row">
                                <span className="coin-names">
                                <img src={item.image} alt="Coin-Icons"/>
                                {item.name +" - "+ item.symbol}
                                </span>
                               <span className="table-price">$ {item.current_price.toLocaleString()}</span>
                                <span value="24hrs-change" className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</span>
                                <span className="table-marketcap">$ {item.market_cap.toLocaleString()}</span>
                                </td>
                                <hr/>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default homepage; 