import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ItemListContainer } from "./ItemListContainer";
import { useList } from "./hooks/hooks";
export function MostrarCard({setChango}) {



const {products} = useList()

  const aumentar = () => { 
    setChango((estadoPrevio) => estadoPrevio + 1)
  } 
  


  return (
    <>
    <ItemListContainer alineacion = 'center' />
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.length === 0 ? (
          <div> Loading... </div>
        ) : (
          products.map ((el) => (
            <Card
              key={el.producto}
              style={{ width: "300px", margin: "10px 5px" }}
            >
              <Card.Img variant="top" src={el.imagen} />


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
