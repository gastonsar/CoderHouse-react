import { useState, useEffect } from "react";
import stockInvierno from "../Productos/invierno.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Invierno = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(stockInvierno);
      }, 2000);
    }).then((result) => setStock(result));
  }, []);

  return <> 
  <h1 style={{textAlign : 'center'}}>Linea invierno</h1>
  <div className="container" style={{display: 'flex' , flexWrap: "wrap"}} >
  {stock.length === 0 ? <div>Loading...</div> : stock.map((el) =>  
  <Card
              key={el.id}
              style={{ width: "300px", margin: "10px 5px" }}
            >
  <Card.Img variant="top" src= {el.imagen} />
  <Card.Body>
    <Card.Title>{el.producto}</Card.Title>
    <Card.Text>
    {el.descripcion}
    </Card.Text>
    <Button variant="primary">Comprar</Button>
  </Card.Body>
</Card>)
}
</div>
    </>;
}
