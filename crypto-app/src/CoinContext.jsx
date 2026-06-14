import { createContext,useEffect,useState } from "react";

export const coinContext=createContext()


function coinContextProvider(props){

let [allCoin,setAllCoin]=useState([])

async function fetchAllCoins(){
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-MMfNsiSkDJWtroWY1ruRtqMA'}};

   fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`, options)
  .then(res => res.json())
  .then(res => setAllCoin(res))
  .catch(err => console.error(err));
}


useEffect(()=>{
    fetchAllCoins();
},[])

const contextValue={allCoin}

return (
    <coinContext.Provider value={contextValue}>
        {props.children}
    </coinContext.Provider>
)

}

export default coinContextProvider;