import React from "react";
import { Navbar } from "../components/navbar.jsx";
import { useState, useEffect } from "react";
import logotv from "../pics/logotv.jpg"
import handshake from "../pics/handshake.jpg"

export const Contact=()=>{

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
        <div className="container-fluid contact">
            <Navbar prevScrollPos={prevScrollPos} visible={visible}/>
            <div className="up-contact">
                <h1 className="h1-contact">Contactanos!</h1>
                <p>Estamos para servirte!</p>
            </div>
            <div className="d-flex row">

                <div className="social-contact d-grid col">
                    <a className="social-item"  href=""><i class="fa-regular fa-envelope me-3 ms-3"></i></a>
                    <a className="social-item"  href=""><i class="fa-solid fa-phone me-3 ms-3"></i>6222 2285</a>
                    <a className="social-item"  href=""><i class="fa-brands fa-whatsapp me-3 ms-3" ></i></a>
                    <a className="social-item"  href=""><i class="fa-brands fa-facebook me-3 ms-3"></i>Facebook</a>
                    <a className="social-item"  href=""><i class="fa-brands fa-instagram me-3 ms-3"></i><span>Telemercado</span></a>
                    <a className="social-item" href=""><i class="fa-brands fa-tiktok me-3 ms-3"></i><span>Tik tok</span></a>
                
                </div>
                <div className="col handshake">
                    <img className="handshake" src={handshake} alt="" />
               
                </div>

                <div className="col">
                    <img className="logo-contact" src={logotv} alt="" style={{maxWidth: "500px"}}/>
                </div>
            </div>
    </div>  
    )


}


       
        