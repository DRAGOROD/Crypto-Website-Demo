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
                                <td className="coin-name">
                                <img src={item.image} alt="Coin-Icons"/>
                                {item.name +" - "+ item.symbol}
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default homepage; 