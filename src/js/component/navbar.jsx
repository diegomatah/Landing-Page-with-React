import React from "react"

function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" style={{"margin-left": "85px","font-size":"50px"}} href="#"><i class="fas fa-plane mx-2"></i>Geeks Travel</a>
          <div className="d-flex justify-content-end mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav" style={{"margin-right": "30px"}}>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#"><i class="fas fa-home mx-2"></i>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#"><i class="fas fa-users mx-2"></i>Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#"><i class="fas fa-suitcase-rolling mx-2"></i>Mis Viajes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#"><i class="fas fa-address-book mx-2"></i>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;