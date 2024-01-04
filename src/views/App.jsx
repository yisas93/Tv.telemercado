import '../App.css';
import logotv from "../pics/logotv.jpg"
import { Navbar } from '../components/navbar.jsx';
import { Card1 } from '../components/card1.jsx';
import ivan from "../pics/ivan.jpg"
import { Footer } from '../components/footer';
import portada from "../pics/portada.jpg"
import niky from "../pics/niky.jpg"
import oscar2 from "../pics/oscar2.jpg"
import roy from "../pics/roy.jpg"
import kenji from "../pics/kenji.jpg"
import portada2 from "../pics/portada2.jpg"
function App() {





  return (
    <div className="App">
       <Navbar/>
       <div className="up-inicio d-flex" >
        <div className="portada-container"><img src={portada2} className='portada2' alt="" /></div>
        <div className="logo-portada-holder" >
          <img className="logo-portada" src={logotv} alt="" />
        </div>
        

       </div>
        <div className="absolute">
       <div className="d-flex row img-cont">
          <div className="logo-tv">
             <img className='logoimg' src={logotv} alt="" />
          </div>
          <div className="info-inicio ">
            <div className="titulo-cont">
                 <h1 className='titulo'>Telemercado</h1>
                 <h2 className='h2-inicio'>-¿Quiénes somos?</h2>
             </div>
          <div className="p-inicio">
              <p>En nuestro emocionante y dinámico programa, brindamos a emprendedores y dueños de negocios la oportunidad de promocionar sus marcas y negocios de una manera única y efectiva. Nos enorgullece ser un set de presentación para aquellos que desean compartir su pasión y éxito con una audiencia comprometida.
                 En cada episodio, nos sumergimos en el mundo de los emprendedores y exploramos sus historias fascinantes. Nuestro objetivo es inspirar a nuestra audiencia al mostrarles los desafíos que estos valientes empresarios han superado y cómo han convertido sus sueños en una realidad tangible.
              </p>
          </div>
          <div className="p-inicio-2">
              <p>
                  No importa si tu marca es grande o pequeña, si estás comenzando o ya tienes un negocio establecido, nuestro programa te ofrece una oportunidad única para conectarte con una audiencia comprometida y ampliar tu alcance. Valoramos la diversidad y la inclusión, por lo que todas las industrias y sectores son bienvenidos.</p></div>
          </div>


       </div>
<div className="img-inicio">
  <img className='portada' src={portada} alt="" />
 </div>
        </div>
        <div className='div2-inicio'>
          <h1 className='titulo-equipo'>Nuestro Equipo de Profesionales</h1>
          <div className="cards">
          <div className="d-flex row cards-holder-inicio">
            <div className="col-6">   
                <Card1 
                    name={"Nicol Solano"} 
                    description={"Presentadora"}
                    link={""}
                    img={niky}
                    class={"card-img-top "}
                />  
            </div>
            <div className="col-6">
              <Card1 
                  name={"Iván Díaz"} 
                  description={"Presentador"}
                  link={""}
                  img={ivan}
                  class={"card-img-top"}
              />
            </div>
          </div>
          <div className="row cards-holder-inicio">
              <div className="col-4">
                <Card1 
                    name={"Oscar Barrantes"} 
                    description={"Gerente General"}
                    link={""}
                    img={oscar2}
                    class={"card-img-top"}
                />
              </div>
              <div className="col-4">
                <Card1 
                    name={"Roy Roa"} 
                    description={"Community Manager"}
                    link={""}
                    img={roy}
                    class={"card-img-top"}
                />
              </div>
              <div className="col-4">
                <Card1 
                    name={"Kenji Sánchez"} 
                    description={"Community Manager"}
                    link={""}
                    img={kenji}
                    class={"card-img-top-2"}
                />
              </div>
          </div>
          </div>
        </div>
        <div className="frase container-fluid">
            <span className="quote-mark"><i class="fa-solid fa-quote-right"></i></span>
              <h1 className='h1-frase' >¿Que le compro, que le vendo, que le cambio?</h1>
              <p className='quote'>- Suerte es lo que sucede cuando la preparación y la oportunidad se encuentran y fusionan</p>  
        </div>
        <div className="footer-cont">
              <Footer/>
        </div>
    </div>
  );
}

export default App;
