import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const ItemList = ({ product, handleSetItems }) => {
 
  return product.map((el) => (
    <Card key={el.producto} style={{ width: "300px", margin: "10px 5px" }}>
      <Card.Img variant="top" src={el.imagen} />

      <Card.Body>
        <Card.Title>{el.producto}</Card.Title>
        <Card.Text>{`${el.descripcion}  $${el.precio}`}</Card.Text>
        <Button onClick={() => handleSetItems(el)} variant="primary">
          Comprar
        </Button>
      </Card.Body>
    </Card>
  ));
};
