import React, { useEffect, useState } from "react";
{/*Importing google charts */}
import Chart from 'react-google-charts'

{/*importing historical Data from coin file */}
function LineChart({historicalData}){

{/*setting up veriables to store the coin details */}
let [data,setData]=useState([["Date","Prices"]])

useEffect(()=>{
    let dataCopy=[["Date","Prices"]];
    {/*if historicalData fetched successfully*/}
if(historicalData.prices){
    historicalData.prices.map((item)=>{
    {/*push the datas into relevent format just like react google chart specified  */}
      dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
    })
    setData(dataCopy);
}
},[historicalData])

return (
    <div id="line-chart">
        <Chart chartType="LineChart" data={data} height="100%" legendToggle />
    </div>
)

}

export default LineChart;