
import '../App.css';
import wallpaperw from "../pics/wallpaperw.jpg"

import { Navbar } from '../components/navbar.jsx';
import { useState, useEffect } from 'react';
function App() {
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
  return (
    <div className="App">
        <Navbar prevScrollPos={prevScrollPos} visible={visible}/>
<div className="d-flex row img-cont">
 
    <img src={wallpaperw} alt="" />

</div>
    
    </div>
  );
}

export default App;
