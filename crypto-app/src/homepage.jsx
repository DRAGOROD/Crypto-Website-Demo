import React from 'react'
import {useContext,useState,useEffect} from 'react'
import { coinContext } from './CoinContext'; {/* importing coinContext variable from CoinContext file */}
import {Link} from 'react-router-dom'; {/*Importing Link to setup the rought page */}
import MarketSkeleton from './marketSkeleton'

let postPerPage=10;

function homepage(){

    {/*importing allcoin, currency from the exported coinContext*/}
    let {allCoin,currency}=useContext(coinContext)
    {/*setting up veriables to show the coin deatils */}
    let [displayCoin,setDisplayCoin]=useState([])
    {/*setting up veriables to detect the input of searchBox */}
    let [input,setInput]=useState('');
    {/*page of pagination */}
    let [currentPage,setCurrentPage]=useState(1)

 {/*InputBox function*/}
    function handleInput(e){
        setInput(e.target.value)
    if(e.target.value===""){
        setDisplayCoin(allCoin);
    }
    }

         {/*Pagination Calculation */}
let lastIndex=currentPage*postPerPage;
let firstIndex=lastIndex-postPerPage;
let currentPosts=displayCoin.slice(firstIndex,lastIndex);   
let totalPages= Math.ceil(displayCoin.length/postPerPage)

    {/*SearchBox function*/}
    async function searchHandle(e){
        e.preventDefault();
    let coins= await allCoin.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
    }

    useEffect(()=>{
 setDisplayCoin(allCoin)
},[allCoin])

if(displayCoin.length!==0){

    return (
        <div id="page-container">
            <div id="search-container">
                <h3 id="search-heading" className="block-el">Look for the Best Performing Coins</h3>
                {/*SearchBox */}
                <form id="search-box" onSubmit={searchHandle} className="block-el">
                    <input onChange={handleInput} value={input} list="coin-list" type="text" placeholder="Search Crypto........" id="search-input-box" required/>
                    <datalist id="coin-list">
                        {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
                    </datalist>
                    <button type="submit" id="search-btn">&#x2315;</button>
                </form>
            </div>
            <div id="coin-table">
                <table>
                    <thead className="block-el">
                      <tr className="table-layout">
                        <th>Coin</th>
                        <th id="price-th">Price</th>
                        <th>24H Change</th>
                        <th>Market Cap</th>
                      </tr>
                    </thead>
                    <tbody className="block-el">
                    {/*mapping the coin Details*/}
                    {currentPosts.slice(0,10).map((item,index)=>(
                            <tr className="table-layout" key={index}>
                                <td className="coin-deatils-row">
                                <Link to={`coin/${item.id}`} className="coin-names">
                                <img src={item.image} alt="Coin-Icons"/>
                                {item.name +" - "+ item.symbol}
                                </Link>
                               <span className="table-price">{currency.symbol} {item.current_price.toLocaleString()}</span>
                                <span value="24hrs-change" className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100} %</span>
                                <span className="table-marketcap">{currency.symbol} {item.market_cap.toLocaleString()}</span>
                                </td>
                                <hr/>
                            </tr>
                        ))}
                        {/*placing the pagination section */}
                        <div id="pagination-btns">
                         {Array.from({length:totalPages},(_,i)=>i+1).map(page=>(<button key={page} onClick={()=>setCurrentPage(page)}>{page}</button>))}
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    )
}else{
    return <MarketSkeleton/>
}
}

export default homepage; 