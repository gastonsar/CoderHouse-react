import { useState } from "react";
import cart from '../assets/carrito.png'

const Carrito = ({chango}) => {
 
  return (
    <>
  <img src={cart} alt="chango" /> 
  <span style={{color:'white'}}> {chango} </span>

    </>
  );
};

export default Carrito;
