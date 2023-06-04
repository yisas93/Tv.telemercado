import React, {useRef} from "react";
import { Navbar } from "../components/navbar.jsx";
import { Footer } from "../components/footer.jsx";

import emailjs from '@emailjs/browser';


export const Contact=()=>{

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o4q34a5', 'template_1rmeuyl', form.current, 'AVKADi-TXDCTATM7f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("mensaje enviado con exito")
      e.target.reset()

  };
    return(
        <div className=" contact">
            <Navbar />
            <div className="up-contact">
                <h1 className="mt-5 h1-contact">Contactanos!</h1>
                <p className="p-contact">Las oportunidades no aparecen...</p>
                <h2 className="h2-contact">¡Tú las creas!</h2>
            </div>

            <div className="row contact-middle mt-5">
                <div className="col">
                    <div className="mail-contact d-flex mb-5">
                        <div><i class="fa-regular fa-envelope me-4 icon-contact"></i></div>
                        <div>
                            <h5 className="">E-mail</h5> 
                            <span>something@something.com</span>
                        </div>
                    </div>
                    <div className="wsp-contact d-flex ">
                        <div><i class="fa-brands fa-whatsapp me-4 icon-contact"></i></div>
                        <div>
                            <h5>Whatsapp</h5>
                            <span>79347382</span>
                        </div>
                    </div>
                </div>
                <div className="col"> 
                <section>
            <div className="container  form-contact" >
                <h2>Escribenos</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="input">
                        <div className="name d-grid mb-1">
                            <label htmlFor="email">Datos Personales</label>
                             <input className="input-contact" type="text " placeholder="Nombre y apellido" name="user_name" required/>
                        </div>
                        <div className="email d-grid mb-1">
                            <label htmlFor="email ">Dirección de E-mail</label>
                               <input className="input-contact" type="email" name="user_email"  placeholder="E-mail" required/>
                        </div>
                       
                        <div className="message d-grid">
                            <label htmlFor="message">Mensaje</label>
                            <textarea className="input-contact" name="message" cols="80" rows="5" placeholder="Cuéntanos que información necesitas saber sobre nuestros servicios"></textarea>
                        </div>
                    </div>
                   
                 
                    
                    
                    <button type="submit" className="mt-5 mb-2 ms-3 btn-contact">Enviar mensaje</button>
                </form>
            </div>
          </section></div>
            </div>
         <Footer/>
    </div>  
    )


}


       
        