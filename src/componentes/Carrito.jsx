import { useContext } from "react";
import { CartContext } from "../context/context";
import { Link } from "react-router-dom";
import cart from "../assets/carrito.png";


  export const Carrito = () => {

  const {items} = useContext(CartContext)




  return (
    <>
      <Link to="resumen">
        <img src={cart} alt="" />
        </Link>
      <span style={{color:'red'}}>{items.length}</span>
      
    </>
  );
};


