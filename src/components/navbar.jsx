import React from "react";
import {Link} from "react-router-dom"
export const Navbar=({ prevScrollPos, visible })=>{
    return(
        <nav className={`navbar ${visible ? '' : ' hidden'} navbar-expand-lg` } >
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" style={{color: "blue"}} aria-current="page" to="/">Inicio</Link>
              <Link className="nav-link active" style={{color: "blue"}} to="/contacto">Contactanos</Link>
              <Link className="nav-link active" style={{color: "blue"}} to="#">Videos</Link>
              <Link className="nav-link active" style={{color: "blue"}} to="/nosotros">Nosotros</Link>
          
            </div>
          </div>
        </div>
      </nav>
    )
}