import React from "react";
{/*Importing Skeleton*/}
import Skeleton from "react-loading-skeleton";

function skeleton(){

return (
   <>
    {/*Coin Icon */}
    <div id="skeleton-heading">
     <div>
        <Skeleton circle height={100} width={100}/>
     </div>
     {/*Coin heading */}
     <div id="skeleton-headtext">
        <Skeleton height={35} width='15%'/>
     </div>
     </div>
      {/*Coin Body */}
     <div id="skeleton-body">
      <div id="skeleton-chart">
        <Skeleton height={500} width="50%"/>
      </div>
      <div>
        {/*mapping the detail section */}
        <div id="skeleton-details">
      {Array.from({length:9}).map((_,index)=><Skeleton width="55%" height={30} key={index} className="skeleton-text-deatils" />)}
        </div> 
        {/*buy and sell buttons */}
      <div id="skeleton-btns">
      <div id="skeleton-buy-btn">
       <Skeleton height={55} width="58%"/>
       </div>
       <div id="skeleton-sell-btn">
       <Skeleton height={55} width="58%"/>
       </div>
       </div>
      </div>
     </div>
     </>
)

}

export default skeleton;