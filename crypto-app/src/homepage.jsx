import React from 'react'
import {useContext,useState,useEffect} from 'react'
import { coinContext } from './CoinContext'; {/* importing coinContext variable from CoinContext file */}
import {Link} from 'react-router-dom'
function homepage(){
    let {allCoin,currency}=useContext(coinContext)
    let [displayCoin,setDisplayCoin]=useState([])
    let [input,setInput]=useState('');

    function handleInput(e){
        setInput(e.target.value)
    if(e.target.value===""){
        setDisplayCoin(allCoin);
    }
    }

    async function searchHandle(e){
        e.preventDefault();
    let coins= await allCoin.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
    }

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])
    
    return (
        <div id="page-container">
            <div id="search-container">
                <h3 id="search-heading">Look for the Best Performing Coins</h3>
                <form id="search-box" onSubmit={searchHandle}>
                    <input onChange={handleInput} value={input} list="coin-list" type="text" placeholder="Search Crypto........" id="search-input-box" required/>
                    <datalist id="coin-list">
                        {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
                    </datalist>
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
                                <Link to={`coin/${item.id}`} className="coin-names">
                                <img src={item.image} alt="Coin-Icons"/>
                                {item.name +" - "+ item.symbol}
                                </Link>
                               <span className="table-price">{currency.symbol} {item.current_price.toLocaleString()}</span>
                                <span value="24hrs-change" className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</span>
                                <span className="table-marketcap">{currency.symbol} {item.market_cap.toLocaleString()}</span>
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