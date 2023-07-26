import { useContext } from "react";
import cart from "../assets/carrito.png";
import { ThemeContext } from "../context/context";
import { Link } from "react-router-dom";
const Carrito = () => {
  const ejm = useContext(ThemeContext);

  return (
    <>
      <Link to="resumen">
        <img src={cart} alt="chango" />
        </Link>
      <span style={{color:'red'}}>{ejm.length}</span>
      
    </>
  );
};

export default Carrito;
