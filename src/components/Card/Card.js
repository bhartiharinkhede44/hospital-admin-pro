import "./Card.css";
import React from 'react'

function Card({image,title,text}) {
  return (
    <div>
      <div class="card ms-5 mt-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{text}</p>
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
