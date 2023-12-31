import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Loading } from "./Loading";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { CartContext } from "../context/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
export const Invierno = ({ }) => {
  const [stock, setStock] = useState([]);

const {items, clear, handleSetItems} = useContext(CartContext)


  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const refCollection = collection(db, "invierno");
      getDocs(refCollection).then((snapshot) => {
        setStock(
          snapshot.docs.map((el) => {
            return el.data();
          })
        );
      });
    }, 2000);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Linea invierno</h1>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {stock.length === 0 ? (
          <Loading />
        ) : (
          stock.map((el) => (
            <Card
              key={el.id}
              style={{
                width: "300px",
                margin: "10px 5px",
                borderRadius: "35px",
              }}
            >
              <Card.Img variant="top" src={el.imagen} />
              <Card.Body>
                <Card.Title>{el.producto}</Card.Title>
                <Card.Text>{`${el.producto} $${el.precio} `}</Card.Text>
                <Button onClick={() =>handleSetItems(el)} variant="primary">
                 Agregar al carrito
                </Button>
            <Link to={`/${el.id}`}>
                <Button variant="primary">
                 Ver detalle
                </Button>
                </Link>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </>
  );
};
