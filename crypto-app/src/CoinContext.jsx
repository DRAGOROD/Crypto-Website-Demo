import { createContext,useEffect,useState } from "react";

{/*creating context to export the coin infos to other component */}
export const coinContext=createContext()


function coinContextProvider(props){

{/*setting up veriables to store the coin details */}
let [allCoin,setAllCoin]=useState([])
{/*setting up veriables to store the currency details */}
let [currency,setCurrency]=useState({name:"usd",symbol:"$"})

{/*fetching the coin details for the home page */}
async function fetchAllCoins(){
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-MMfNsiSkDJWtroWY1ruRtqMA'}};

   fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`, options)
  .then(res => res.json())
  .then(res => setAllCoin(res))
  .catch(err => console.error(err));
}


useEffect(()=>{
    fetchAllCoins();
},[currency])

{/*giving the prop value of allCoin,currency and setCurrency to other components*/}
const contextValue={allCoin,currency,setCurrency}

return (
    <coinContext.Provider value={contextValue}>
        {props.children}
    </coinContext.Provider>
)

}

export default coinContextProvider;