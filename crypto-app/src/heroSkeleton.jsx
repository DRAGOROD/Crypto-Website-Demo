import React from 'react'
import Skeleton from 'react-loading-skeleton';

function heroSkeleton(){
  return (
    <>
    <div id="heroskeleton-head">
      <Skeleton width="15%" height={45}/>
      <div id="skeletonhero-heading">
      <Skeleton  width="200%" height={75}/>
      </div>
      <Skeleton width="15%" height={45}/>
    </div>
    <div id="heroskeleton-body">
      {Array.from({length:4}).map((_,index)=>(
        <div key={index}>
        <Skeleton circle height={80} width="25%" className='heroskeleton-details'/>
        <Skeleton height={10} width={110} className='heroskeleton-details'/>
        <Skeleton height={25} width={70} className='heroskeleton-details'/>
      </div>))}
    </div>
    </>
  )
}

export default heroSkeleton;
