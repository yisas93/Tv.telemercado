import React from "react";
import logotv from "../pics/logotv.jpg"

export const Footer=()=>{
    return(
        <div className="footer row">
            <div className="social-media-footer col">
                <div className="d-grid">
                <img className="logo-footer" src={logotv} alt="" />
                   <div className="d-flex">
                    <i class="fa-brands fa-whatsapp me-3 ms-3" ></i>
                    <i class="fa-brands fa-facebook me-3 ms-3"></i>
                    <i class="fa-brands fa-instagram me-3 ms-3"></i>
                    <i class="fa-brands fa-tiktok me-3 ms-3"></i>
                    </div>
                    </div>
            </div>
            <div className="col mid-footer">
                <div className="d-grid mt-2">
                        <span>Contactanos</span>
                        <span>Videos</span>
                        <span>Nosotros</span>
                        <span></span>
                </div>
            </div>
            <div className="col mt-5">
                <p>Queremos llevar tus ideas al siguiente nivel</p>
            </div>

        </div>
    )
}