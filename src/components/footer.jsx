import React from "react";
import logotv from "../pics/logotv.jpg"

export const Footer=()=>{
    return(
        <div className="footer row">
            <div className="social-media-footer col">
                <div className="d-grid">
                <img className="logo-footer" src={logotv} alt="" />
                   <div className="d-flex">
                    <div className="footer-item"><i class="fa-brands fa-whatsapp me-3 ms-3" ></i></div>
                    <div className="footer-item"><i class="fa-brands fa-facebook me-3 ms-3"></i></div>
                    <div className="footer-item"><i class="fa-brands fa-instagram me-3 ms-3"></i></div>
                    <div className="footer-item"><i class="fa-brands fa-tiktok me-3 ms-3"></i></div>
                    
                    
                    
                    
                    </div>
                    </div>
            </div>
            <div className="col mid-footer">
                <div className="d-grid mt-2">
                        <span className="footer-options">• Contactanos</span>
                        <span className="footer-options">• Videos</span>
                        <span className="footer-options">• Nosotros</span>
                        <span className="footer-options"></span>
                </div>
            </div>
            <div className="col footer-talk">
                <div className="d-grid">
                    <div className="d-flex talk">
                   <div className="talk-item"> <i class="fa-brands fa-whatsapp"></i> </div>
                   <div className="footer-info d-grid">
                    <span className="footer-info-title">¡Hablemos!</span>
                    <p>(506)67 89 67 45</p>
                    </div>
                   
                    </div>
                    <div className="d-flex talk">
                    <div className="talk-item"><i class="fa-regular fa-envelope"></i></div>
                    <div className="footer-info d-grid">
                        <span className="footer-info-title">Escribenos</span>
                        <p>something@something.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mt-5">
                <p className="footer-quote">Queremos llevar tus ideas al siguiente nivel</p>
            </div>

        </div>
    )
}