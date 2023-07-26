import { useState, useEffect } from "react";
import casual from "../Productos/lineacasual.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Loading } from "./Loading";

export const Acc = ({handleSetItems,items}) => {
  const [stockA, setStockA] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(casual);
      }, 2000);
    }).then((product) => setStockA(product));
  }, []);

  return (
    <> 
    {console.log(items)}
    <h1 style={{textAlign: 'center'}}>
Accesorios

    </h1>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {stockA.length === 0 ? (
<Loading/>
        ) : (
          stockA.map((el) => (
            <Card key={el.id} style={{ width: "300px", margin: "10px 5px" }}>
              <Card.Img variant="top" src={el.imagen} />
              <Card.Body>
                <Card.Title>{el.producto}</Card.Title>
                <Card.Text>{el.descripcion}</Card.Text>
                <Button onClick={() => handleSetItems(el)} variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </>
  );
};
