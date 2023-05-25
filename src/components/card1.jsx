import React, {useEffect, useState, useRef} from "react";



export const Card1=(props)=>{
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (cardRef.current) {
        if (isElementInViewport(cardRef.current) && !isVisible) {
          setIsVisible(true);
        }
      }
    }

    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);
  
    return(
       
            <div class={`card cards-inicio cardanimate ${
              isVisible ? "appear" : ""
            }`} ref={cardRef} style={{width: "18rem"}}>
  <img src={props.img} class={props.class} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.description}</p>
  </div>
    <a href={props.link} class="btn btn-primary">Conoce más! → </a>
</div>
        
    )
}