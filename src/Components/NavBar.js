import React, { useState } from "react";

function NavBar() {
  const [isclicked, setisclicked] = useState("");
  const [barcheck, setbarcheck] = useState("bi-list");
  function click(barcheck) {
    if (barcheck == "bi-list") {
      setisclicked("navbar-mobile");
      setbarcheck("bi-x");
    } else {
      setisclicked("");
      setbarcheck("bi-list");
    }

  }
  
  console.log(window.location.pathname.replace('/',''))
  var url = window.location.pathname.replace('/','').toLowerCase();
  return (
  <>
    
<header id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="/home"><img src="img/logo/logo-no-background.png" style={{'max-height': '65px'}}/></a></h1>
      <nav id="navbar" className={'navbar order-last ordezr-lg-0 '+ isclicked}>
        <ul>
        <li><a className={'nav-link scrollto '+( url == 'home' ? 'active' : '')}   href="/home">Home</a></li>
        <li><a className={'nav-link scrollto '+( url == 'about' ? 'active' : '')}    href="/about">About Us</a></li>
        <li><a className={'nav-link scrollto '+( url == 'services' ? 'active' : '')} href="/services">Services</a></li>  
        <li><a className={'nav-link scrollto '+( url == 'portfolio' ? 'active' : '')}   href="/portfolio">Portfolio</a></li>
        <li><a className={'nav-link scrollto '+( url == 'team' ? 'active' : '')}  href="/team">Team</a></li>
        <li>
        <div className="social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      </div>
        </li>
        </ul>
        <i className={"bi "+barcheck+" mobile-nav-toggle"} onClick={()=>click(barcheck)}></i>
      </nav>

      {/* <div className="social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      </div> */}

    </div>
  </header>
  </>
  )
}

export default NavBar
