import React from "react";
import logotv from "../pics/logotv.jpg"

export const Footer=()=>{
    return(
        <div className="footer row d-flex">
            <div className="social-media-footer col-sm-12 col-md-3">
                <div className="d-grid">
                <img className="logo-footer" src={logotv} alt="" />
                   <div className="d-flex ms-4 ms-sm-3">
                    <div className="footer-item-whatsapp ms-3 me-1"><i class="fa-brands fa-whatsapp ms-1 me-1" ></i></div>
                    <div className="footer-item-facebook me-1"><i class="fa-brands fa-facebook me-1 ms-1"></i></div>
                    <div className="footer-item-instagram me-1"><i class="fa-brands fa-instagram me-1 ms-1"></i></div>
                    <div className="footer-item-tiktok me-1"><i class="fa-brands fa-tiktok me-1 ms-1"></i></div>
                    
                    
                    
                    
                    </div>
                    </div>
            </div>
            <div className="col-3 col-md-2 mid-footer">
                <div className="d-grid mt-2">
                        <span className="footer-options">•Contactanos</span>
                        <span className="footer-options">•Videos</span>
                        <span className="footer-options">•Nosotros</span>
                        <span className="footer-options"></span>
                </div>
            </div>
            <div className="col-10 col-sm-4 col-md-3  footer-talk ">
                <div className=" d-grid">
                    <div className="d-flex talk">
                   <div className="talk-item wsp"> <i class="fa-brands fa-whatsapp"></i> </div>
                   <div className="footer-info d-grid">
                    <span className="footer-info-title">¡Hablemos!</span>
                    <p>(506)67 89 67 45</p>
                    </div>
                   
                    </div>
                    <div className="d-flex talk">
                    <div className="talk-item email-icon"><i class="fa-solid fa-envelope"></i></div>
                    <div className="footer-info d-grid">
                        <span className="footer-info-title">Escribenos</span>
                        <p>something@something.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-10 col-sm-4 col-md-3 mt-5 footer-quote-cont">
                <p className="footer-quote">Queremos llevar tus ideas al siguiente nivel</p>
            </div>

        </div>
    )
}