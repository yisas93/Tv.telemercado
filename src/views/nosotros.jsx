import React from "react";
import ivann from "../pics/ivann.jpg"
import nikyy from "../pics/nikyy.jpg"
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
        <div className="container-fluid nosotros ">
            <Navbar prevScrollPos={prevScrollPos} visible={visible}/>
            <div className="up-nosotros">
                <div className="title-nosotros">
            <h1 className="h1-nosotros">Conócenos!</h1>
            </div>
            <div className="info">
            <p>En Telemercado, nos enorgullece brindar una plataforma única donde los negocios y las marcas puedan contar sus historias, mostrar sus productos y servicios, y conectar con una audiencia entusiasta y comprometida. Ya sea que estés buscando nuevas ideas para emprender, desees conocer marcas emergentes o simplemente quieras estar al tanto de las últimas tendencias, estamos para servite!!. 
                Si tienes un negocio o una marca que crees que merece ser destacado, contactanos! Estamos siempre en busca de nuevas y emocionantes colaboraciones
            </p>
            </div>
            </div>

            <div className="cards row">

            <div class="card1  mb-3 ms-5 col-5" style={{maxWidth: "600px"}}>
  <div class="row g-0">
    <div class="col-md-6">
      <img src={nikyy} className="img-nosotros" alt="..."/>
    </div>
    <div class="col-md-6 ">
      <div class="card-body ">
        <h5 class="card-title mb-2">Niky Solano. Presentadora</h5>
        <p class="card-text mb-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         
       <div className="d-grid icons">
        <div className="d-flex">
        <a href=""><i class="fa-brands fa-instagram icon"></i><span className="social">Instagram</span></a>
        </div>
        <div className="d-flex">
        <a href=""><i class="fa-brands fa-facebook icon"></i>
        <span className="social">Facebook</span></a>
        </div>
        <div className="d-flex">
        <a href=""><i class="fa-brands fa-tiktok icon"></i>
        <span className="social">Tik-tok</span></a>
        </div>
        <div className="d-flex">
        <a href=""><i class="fa-solid fa-link icon"></i>
        <span className="social">Sitio Web</span></a>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="card1 mb-3 ms-5  col-5" style={{maxWidth: "700px"}}>
  <div class="row g-0">
    <div class="col-md-7">
      <img src={ivann} className="img-nosotros" alt="..." />
    </div>
    <div class="col-md-5 ">
      <div class="card-body">
        <h5 class="card-title mb-2">Iván Díaz. Presentador</h5>
        <p class="card-text mb-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    
)
}