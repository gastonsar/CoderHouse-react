import { useState, useEffect } from "react"
import casual from '../Productos/lineacasual.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 

export const Acc = () => { 

const [stockA, setStockA] = useState([])

useEffect(() =>{
    new Promise((resolve, reject) => {
        setTimeout ( () => { 
            resolve(casual)
        }, 2000)
    }) .then(product => setStockA(product))
}, [])

return ( 
<>

   <div className="container"  style={{display: 'flex', flexWrap: 'wrap'}}>

{stockA.length === 0 ? <div> loading...</div> : stockC.map ((el) => 
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

</>   
)}