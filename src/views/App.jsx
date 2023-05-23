
import '../App.css';
import wallpaper from "../pics/wallpaper.jpg"
import logotv from "../pics/logotv.jpg"
import { Navbar } from '../components/navbar.jsx';
import { useState, useEffect } from 'react';
import foto from "../pics/foto.jpg"
import { Card1 } from '../components/card1.jsx';
import ivann from "../pics/ivann.jpg"
import { Footer } from '../components/footer';
function App() {

  const people = [
    {
      name: "Nicol Solano",
      description: "nfjfnjkdnfkjndjfnjkdsnfdjsfjkdnjfdjfndjknfjkdsnkfndsnjfnjdnfs",
      foto:ivann,
      link:""
    },
    {
      name: "Iván Díaz",
      description: "nfjfnjkdnfkjndjfnjkdsnfdjsfjkdnjfdjfndjknfjkdsnkfndsnjfnjdnfs",
      foto: ivann,
      link:""
    },
    {
      name: "Otro mas",
      description: "nfjfnjkdnfkjndjfnjkdsnfdjsfjkdnjfdjfndjknfjkdsnkfndsnjfnjdnfs",
      foto: ivann,
      link:""
    },
    {
      name: "Otra Persona",
      description: "nfjfnjkdnfkjndjfnjkdsnfdjsfjkdnjfdjfndjknfjkdsnkfndsnjfnjdnfs",
      foto: ivann,
      link:""
    },
    {
      name: "Ultima Persona",
      description: "nfjfnjkdnfkjndjfnjkdsnfdjsfjkdnjfdjfndjknfjkdsnkfndsnjfnjdnfs",
      foto: ivann,
      link:""
    }
  ]







   // State to keep track of previous scroll position
  const [prevScrollPos, setPrevScrollPos]= useState(window.scrollY)

  // State to determine the visibility of the navbar
  const [visible, setVisible]= useState(true)

  useEffect(()=>{
    const handleScroll = ()=>{
      // Get the current scroll position
      const currentScrollPos = window.scrollY
      // Compare current scroll position with the previous one
      setVisible(prevScrollPos > currentScrollPos )
      // Update the previous scroll position with the current one
      setPrevScrollPos(currentScrollPos)
    }
    // Add event listener to the scroll event
    window.addEventListener("scroll", handleScroll)

    // Clean up by removing the event listener when component unmounts
    return ()=>{
      
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])
  return (
    <div className="App">
       <Navbar prevScrollPos={prevScrollPos} visible={visible}/>
        <div className="absolute">
       <div className="d-flex row img-cont">
          <div className="logo-tv">
             <img className='logoimg' src={logotv} alt="" />
          </div>
          <div className="info-inicio ">
            <div className="titulo-cont">
                 <h1 className='titulo'>Telemercado</h1>
                 <h2>-¿Quiénes somos?</h2>
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
  <img src={foto} alt="" />
 </div>
        </div>
        <div className='div2-inicio'>
          <h1 className='titulo-equipo'>Nuestro Equipo</h1>
          <div className="cards">
          <div className="d-flex row cards-holder-inicio">
            <div className="col-6">   
                <Card1 
                    name={"Nicol Solano"} 
                    description={"hola soy niky"}
                    link={""}
                    img={ivann}
                />  
            </div>
            <div className="col-6">
              <Card1 
                  name={"Nicol Solano"} 
                  description={"hola soy niky"}
                  link={""}
                  img={ivann}
              />
            </div>
          </div>
          <div className="row cards-holder-inicio">
              <div className="col-4">
                <Card1 
                    name={"Nicol Solano"} 
                    description={"hola soy niky"}
                    link={""}
                    img={ivann}
                />
              </div>
              <div className="col-4">
                <Card1 
                    name={"Nicol Solano"} 
                    description={"hola soy niky"}
                    link={""}
                    img={ivann}
                />
              </div>
              <div className="col-4">
                <Card1 
                    name={"Nicol Solano"} 
                    description={"hola soy niky"}
                    link={""}
                    img={ivann}
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
