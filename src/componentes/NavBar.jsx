import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carrito from "./Carrito";
import { Contador } from "./ItemCounts";
export const NavBar = ( {chango }) => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LA TIENDA </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Invierno">Invierno</Nav.Link>
            <Nav.Link href="#Linea Casual">Linea Casual</Nav.Link>
          </Nav>
          <Carrito chango={chango} />
        </Container>
      </Navbar>

    </>
  );
};
