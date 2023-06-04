import React from "react";
import {Link} from "react-router-dom"
export const Navbar=({ prevScrollPos, visible })=>{
    return(
        <nav className={`navbar  navbar-expand-lg` } >
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active navigation-buttons"  aria-current="page" to="/">Inicio</Link>
              <Link className="nav-link active navigation-buttons" to="/contacto">Contactanos</Link>
              <Link className="nav-link active navigation-buttons"  to="#">Videos</Link>
              <Link className="nav-link active navigation-buttons" to="/nosotros">Nosotros</Link>
          
            </div>
          </div>
          <div className="ms-auto d-flex"> 
          <div className="social-inicio-cont-whatsapp me-2"><a href="https://api.whatsapp.com/send?phone=50660472692"><i class="fa-brands fa-whatsapp me-1 ms-1 social-inicio" ></i></a></div>
          <div className="social-inicio-cont-facebook me-2"><i class="fa-brands fa-facebook me-1 ms-1 social-inicio"></i></div>
          <div className="social-inicio-cont-instagram me-2"> <i class="fa-brands fa-instagram me-1 ms-1 social-inicio"></i></div>
          <div className="social-inicio-cont-tik-tok"><i class="fa-brands fa-tiktok me-1 ms-1 social-inicio"></i></div>
          
          
        
          
        
          
         
          </div>
        </div>
      </nav>
    )
}