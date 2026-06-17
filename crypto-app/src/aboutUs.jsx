import React from "react";
import AUP from './Assets/aup.png'
import Icon1 from './Assets/iconf1.png'
import Icon2 from './Assets/iconf2.png'
import Icon3 from './Assets/iconf3.png'
import Icon4 from './Assets/iconf4.png'
import Icon5 from './Assets/iconf5.png'
import Icon6 from './Assets/iconf6.png'
function aboutUs(){

return (
    <>
        <h2 id="aboutus-heading">WHY <span style={{color:"yellow"}}>CHOOSE US</span></h2>
        <div id="aboutus-container">
            <div id="container-left">
            <div className="container-stuff">
                <img src={Icon1} alt="icons" className="aboutus-icons"/>
                <h4 className="stuff-heading">CONNECT WALLET</h4>
                <p className="stuff-para">Connect Your Own Wallet To This App</p>
            </div> 
            <div className="container-stuff">
                <img src={Icon2} alt="icons" className="aboutus-icons"/>
                <h4 className="stuff-heading">SELECT QUANTITY</h4>
                <p className="stuff-para">Upload Your Crypto, Set description, Quantity, Price</p>
            </div> 
            <div className="container-stuff">
                <img src={Icon3} alt="icons" className="aboutus-icons"/>
                <h4 className="stuff-heading">SECURE TRANSACTION</h4>
                <p className="stuff-para">Your Transaction Details Would Be Secure</p>
            </div> 
            </div>

            <img src={AUP} alt="About Us Image" id="aup-pic"/>

            <div id="container-right">
            <div className="container-stuff">
                <img src={Icon4} alt="icons" className="aboutus-icons"/>
                <h4 className="stuff-heading">YOUR OWN NFTS</h4>
                <p className="stuff-para">Invest All Your Cryptos In One Platform</p>
            </div> 
            <div className="container-stuff">
                <img src={Icon5} alt="icons" className="aboutus-icons"/>
                <h4 className="stuff-heading">MARKET TO SELL</h4>
                <p className="stuff-para">Discover The Right Crypto Market To Buy And Sell From</p>
            </div> 
            <div className="container-stuff">
                <img src={Icon6} alt="icons" className="aboutus-icons"/>
                <h4 className="stuff-heading">DRIVE COLLECTION</h4>
                <p className="stuff-para">Make It Easy To Invest And Manage</p>
            </div> 
            </div>
        </div>
    </>
)

}


export default aboutUs;