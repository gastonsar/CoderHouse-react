import React from "react";
import cart from '../assets/carrito.png'

const Carrito = () => {
  return (
    <>
  <img src={cart} alt="chango" /> 
  <span style={{color:'white'}}> 0 </span>
    </>
  );
};

export default Carrito;
