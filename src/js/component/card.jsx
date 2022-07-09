import React from "react"

function Card (props){
    return (
    <div className="card mt-4" style={{"width": "20rem"}}>
    <img src={props.img} className="card-img-top img-fluid h-5 p-3" style={{"height": "15rem"}} alt="..."></img>
    <div className="card-body ">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Muéstrame más</a>
    </div>
  </div>
  );
}


export default Card;
