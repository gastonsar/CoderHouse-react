import { useEffect, useState } from "react";
import Carrito from "./Carrito";
import Productos from "../Productos/stock.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ItemListContainer } from "./ItemListContainer";

export function MostrarCard({setChango}) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const miPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos);
      }, 5000);
    }).then((result) => setProduct(result));
  }, []);

  const aumentar = () => { 
    setChango((estadoPrevio) => estadoPrevio + 1)
  } 
  


  return (
    <>
    <ItemListContainer color = 'blue' alineacion = 'center' />
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {product.length === 0 ? (
          <div> Loading... </div>
        ) : (
          product.map((el) => (
            <Card
              key={el.producto}
              style={{ width: "calc(33.33% - 20px)", margin: "10px 5px" }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{el.producto}</Card.Title>
                <Card.Text>{el.descripcion}</Card.Text>
                <Button onClick={aumentar}variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
   
    </>
  );
}
