import React from "react";
import ivan from "../pics/ivan.jpg"
import niky from "../pics/niky.jpg"
import logotv from "../pics/logotv.jpg"
import { Navbar } from "../components/navbar.jsx";
import { useState, useEffect } from "react";
export const Nosotros=()=>{

    const [prevScrollPos, setPrevScrollPos]= useState(window.scrollY)
  const [visible, setVisible]= useState(true)

  useEffect(()=>{
    const handleScroll = ()=>{
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos )
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener("scroll", handleScroll)
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])

    return(
        <div className=" nosotros ">
            <Navbar />
            <div className="row up" ></div>
            <div className="up-nosotros row"  >
                <div className="title-nosotros col-8" >
            <h2 className="h2-nosotros">Conócenos!</h2>
            <h1 className="h1-nosotros">Somos Telemercado</h1>
            <p className="info-nosotros">
                Nuestra misión es ayudarte a materializar tus metas!
              </p>
            </div>
            <div className="logo-nosotros-cont col-4">
            <img className="logo-nosotros" src={logotv} alt="" />
            </div>
            </div>

            

























            <div className="cards-nosotros row d-grid" >
            <div className="card-cont">
              <div class="card1   col-12" >
                <div class="row g-0">
                    <div class="col-md-6 img-holder-nosotros" >
                      <img src={niky} className="img-nosotros" alt="..."/>
                    </div>
                    <div class="col-md-6 side-card1">
                        <div class="card-body content-card1">
                              <h1 class="card-title mb-2">Niky Solano</h1>
                              <h5>Presentadora</h5>
                              <p class="card-text mb-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
                          <div className="d-flex icons">
                            <div className="d-flex">
                              <a href=""> <i class="fa-brands fa-instagram icon"></i></a>
                                
                            </div>
                            <div className="d-flex">
                                <a href=""><i class="fa-brands fa-facebook icon"></i>
                             </a>
                            </div>
                            <div className="d-flex">
                                <a href=""><i class="fa-brands fa-tiktok icon"></i>
                               </a>
                            </div>
                            
                         </div> 
                        </div>
                    </div>
                  </div>
                </div>
             </div>






             <div className="card-cont">
              <div class="card1   col-12" >
                <div class="row g-0">
                    
                    <div class="col-md-6 side-card1">
                        <div class="card-body content-card1">
                              <h1 class="card-title mb-2">Niky Solano</h1>
                              <h5>Presentadora</h5>
                              <p class="card-text mb-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
                          <div className="d-flex icons">
                            <div className="d-flex">
                              <a href=""> <i class="fa-brands fa-instagram icon"></i></a>
                                
                            </div>
                            <div className="d-flex">
                                <a href=""><i class="fa-brands fa-facebook icon"></i>
                             </a>
                            </div>
                            <div className="d-flex">
                                <a href=""><i class="fa-brands fa-tiktok icon"></i>
                               </a>
                            </div>
                            
                         </div> 
                        </div>
                    </div>


                    <div class="col-md-6 img-holder-nosotros" >
                      <img src={niky} className="img-nosotros" alt="..."/>
                    </div>







                  </div>
                </div>
             </div>
            </div>
        </div>
    
)
}