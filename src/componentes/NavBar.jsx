import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carrito from "./Carrito";
import { Link, NavLink , Route, Routes } from "react-router-dom";

export const NavBar = ( {chango }) => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link className="nav-link navbar-brand"  to='/'>LA TIENDA </Link>
          <Nav className="me-auto">
          <Link className="nav-link" to='/' >Inicio</Link>
            <Link className="nav-link"  to='invierno' >Invierno</Link>
          <Link className="nav-link" to='lineacasual' >Linea Casual</Link>
          </Nav>
          <Carrito chango={chango} />
        </Container>
      </Navbar>

    </>
  );
};
