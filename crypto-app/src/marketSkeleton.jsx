import React from 'react'
import Skeleton from 'react-loading-skeleton';

function marketSkeleton() {
  return (
       <>
       <div id='marketskeleton-heading'>
        <Skeleton height={50} width="60%"/>
       </div>
       <div id="searchbox-skeleton">
        <Skeleton height={50} width="44%"/>
       </div>
       <div id="coin-details">
        {Array.from({length:11}).map((_,index)=>(<Skeleton key={index} width="85%" height={45} className="market-details"/>))}
       </div>
       <div id="skeleton-btns">
        <Skeleton height={35} width="45%"/>
       </div>
       </>
  )
}


export default marketSkeleton;