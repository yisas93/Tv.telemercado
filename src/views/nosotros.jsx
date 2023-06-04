import React from "react";
import ivan from "../pics/ivan.jpg"
import niky from "../pics/niky.jpg"
import oscar2 from "../pics/oscar2.jpg"
import kenji from "../pics/kenji.jpg"
import roy from "../pics/roy.jpg"
import logotv from "../pics/logotv.jpg"
import {Footer} from "../components/footer.jsx"
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
                <div className="title-nosotros col-6 col-sm-6 col-md-8" >
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
                    <div class="col-8 col-sm-6 img-holder-nosotros" >
                      <img src={ivan} className="img-nosotros card1-pic" alt="..."/>
                    </div>
                    <div class="col-8 col-sm-6 side-card1 cards-1y4">
                        <div class="card-body content-card1">
                              <h1 class="card-title mb-4">Iván Díaz</h1>
                              <h5 className="mt-3">Presentador</h5>
                              <p class="card-text mt-5 mb-5">Iván Díaz es un reconocido profesional con más de 35 años de experiencia en el mundo de la televisión, destacándose especialmente por su programa TeleMercado. Con una amplia trayectoria en el ámbito televisivo, Iván se ha consolidado como una figura emblemática y respetada en la industria.</p> 
                          <div className="d-flex icons ">
                            <div className="d-flex ms-auto">
                              <a href=""> <i class="fa-brands fa-instagram insta-nosotros icon"></i></a>
                                
                            </div>
                            <div className="d-flex">
                                <a href=""><i class="fa-brands fa-facebook icon"></i>
                             </a>
                            </div>
                            
                            
                         </div> 
                        </div>
                    </div>
                  </div>
                </div>
             </div>






             <div className="card-cont-2 " >
              <div class="card1 card-niky-holder  col-12" >
                <div class="row g-0">
                    
                    <div class="col-7 col-sm-4 col-md-6 side-card1 card-niky">
                        <div class="card-body content-card1 card-niky">
                              <h1 class="card-title mb-2">Niky Solano</h1>
                              <h5 className="mt-3">Presentadora</h5>
                              <p class="card-text  mt-5 mb-5">Niky Solano es una joven talentosa que recientemente se ha unido al exitoso programa TeleMercado como presentadora, aportando frescura y entusiasmo a la pantalla. A pesar de su corta edad, Niky ha demostrado un gran potencial y habilidad para comunicarse con la audiencia.</p> 
                          <div className="d-flex icons">
                            <div className="d-flex">
                              <a href=""> <i class="fa-brands fa-instagram insta-nosotros icon"></i></a>
                                
                            </div>
                            <div className="d-flex">
                                <a href=""><i class="fa-brands fa-facebook icon"></i>
                             </a>
                            </div>
                            <div className="d-flex ">
                                <a href=""><i class="fa-brands fa-tiktok tiktok-nosotros  icon"></i>
                               </a>
                            </div>
                            
                         </div> 
                        </div>
                    </div>


                    <div class="col-sm-4 col-md-3 img-holder-nosotros ms-5" >
                      <img src={niky} className="img-nosotros img-niky" alt="..."/>
                    </div>







                  </div>
                </div>
             </div>




          





             <div className="card-cont-2 mb-0">
              <div class="card3   col-12" >
                <div class="row g-0">
                      <h1 className="community-h1">Community Managers</h1>
                    <div class="col-md-6 img-holder-nosotros img-3-nosotros d-grid" >
                      <img src={kenji} className="img-nosotros img-kenji" alt="..." />
                      <div className="d-flex mt-3">
                        <h5 className="me-auto">Kenji Sánchez</h5>
                        <a href=""><i class="fa-brands fa-facebook icon-community ms-auto"></i>
                             </a>
                             <a href=""> <i class="fa-brands fa-instagram insta-nosotros icon-community"></i></a>
                      </div>
                      
                    </div>
                    <div class="col-md-6 img-holder-nosotros img-3-nosotros d-grid"  >
                      <img src={roy} className="img-nosotros img-roy" alt="..."   />
                      <div className="d-flex mt-3" style={{maxWidth: "350px"}}>
                         <h5 className="me-auto roy-h5">Roy Roa</h5>
                         <a href=""><i class="fa-brands fa-facebook icon-community "></i>
                             </a>
                             <a href=""> <i class="fa-brands fa-instagram insta-nosotros icon-community me-5"></i></a>
                      </div>
                     
                    </div>
                    <div class="col-10 col-sm-8 side-card1">
                        <div class="card-body content-card3">
                             
                              <p class="card-text-community mb-5 ">
El equipo de Community Managers del programa TeleMercado está compuesto por Kenji y Roy, profesionales dedicados a gestionar la presencia digital del programa y mantener una conexión efectiva con la audiencia en las diferentes plataformas en línea.</p> 
                         
                        </div>
                    </div>
                  </div>
                </div>
             </div>



             <div className="card-cont ">
              <div class="card1   col-12" >
                <div class="row g-0">
                    <div class="col-8 col-sm-6 img-holder-nosotros" >
                      <img src={oscar2} className="img-nosotros card1-pic" alt="..."/>
                    </div>
                    <div class="col-8 col-sm-6 side-card1 cards-1y4">
                        <div class="card-body content-card1">
                              <h1 class="card-title mb-2">Oscar Barrantes</h1>
                              <h5 className="mt-4">Gerente General</h5>
                              <p class="card-text mt-5 mb-5">Oscar es un destacado profesional que ocupa el puesto de Gerente General en el programa TeleMercado. Con una vasta experiencia en la industria. Oscar se ha convertido en una figura clave en la gestión y dirección del programa, aportando su conocimiento y liderazgo para garantizar el éxito continuo del programa.</p> 
                          <div className="d-flex icons ">
                            <div className="d-flex ms-auto">
                              <a href=""> <i class="fa-brands insta-nosotros fa-instagram icon"></i></a>
                                
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

            </div>
            
              <Footer/>
        </div>
    
)
}