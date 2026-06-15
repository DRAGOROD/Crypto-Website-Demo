import React from "react";
import AUP from './Assets/aup.png'

function aboutUs(){

return (
    <>
        <h2 id="aboutus-heading">WHY CHOOSE US</h2>
        <div id="aboutus-container">
            <div id="container-left">
            <div className="container-stuff">
                <img src="" alt="icons"/>
                <h4>Reason 1</h4>
                <p>Lorem Ipsum</p>
            </div> 
            <div className="container-stuff">
                <img src="" alt="icons"/>
                <h4>Reason 1</h4>
                <p>Lorem Ipsum</p>
            </div> 
            <div className="container-stuff">
                <img src="" alt="icons"/>
                <h4>Reason 1</h4>
                <p>Lorem Ipsum</p>
            </div> 
            </div>
            <img src={AUP} alt="About Us Image" id="aup-pic"/>
            <div id="container-right">
            <div className="container-stuff">
                <img src="" alt="icons"/>
                <h4>Reason 4</h4>
                <p>Lorem Ipsum</p>
            </div> 
            <div className="container-stuff">
                <img src="" alt="icons"/>
                <h4>Reason 5</h4>
                <p>Lorem Ipsum</p>
            </div> 
            <div className="container-stuff">
                <img src="" alt="icons"/>
                <h4>Reason 6</h4>
                <p>Lorem Ipsum</p>
            </div> 
            </div>
        </div>
    </>
)

}


export default aboutUs;