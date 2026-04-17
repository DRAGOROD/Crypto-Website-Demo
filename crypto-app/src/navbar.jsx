import SiteLogo from './Assets/Coinify Logo.png'

function Navbar(){
    return (
        <nav id="nav-container">
          <img id="site-logo" src={SiteLogo}/>
            <ul id="nav-links">
              <a href="#" className="nav-options"><li id="">Home</li></a>
              <a href="#" className="nav-options"><li id="">Market</li></a>
              <a href="#" className="nav-options"><li id="">About Us</li></a>
              <a href="#" className="nav-options"><li id="">Join</li></a>
            </ul>
            <div id="login-btn">Login</div>
        </nav>
    )
}

export default Navbar