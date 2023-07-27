import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../context/context";



export const ItemList = ({products}) => {

  const {clear,handleSetItems} = useContext(CartContext)

  return products.map((el) => (
    <Card key={el.producto} style={{ width: "300px", margin: "10px 5px" }}>
      <Card.Img variant="top" src={el.imagen} />

      <Card.Body>
        <Card.Title>{el.producto}</Card.Title>
        <Card.Text>{`${el.descripcion}  $${el.precio}`}</Card.Text>
        <Button onClick={() => handleSetItems(el)} variant="primary">
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  ));
};
