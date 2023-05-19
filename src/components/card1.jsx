import React from "react";



export const Card1=(props)=>{
      /*
      Nombre
      foto
      descripcion
      link
      */ 

    return(
       
            <div class="card cards-inicio" style={{width: "18rem"}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.description}</p>
    <a href={props.link} class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
    )
}