import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Loading } from "./Loading";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/context";

export const Acc = ({}) => {
  const [stockA, setStockA] = useState([]);

  const { handleSetItems, clear } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      const dbb = getFirestore();

      const refCollectionB = collection(dbb, "accesorios");

      getDocs(refCollectionB).then((acce) => {
        setStockA(
          acce.docs.map((ell) => {
            return ell.data();
          })
        );
      });
    }, 2000);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Accesorios</h1>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {stockA.length === 0 ? (
          <Loading />
        ) : (
          stockA.map((el) => (
            <Card key={el.id} style={{ width: "300px", margin: "10px 5px" }}>
              <Card.Img variant="top" src={el.imagen} />
              <Card.Body>
                <Card.Title>{el.producto}</Card.Title>
                <Card.Text>{`${el.descripcion} $${el.precio}`}</Card.Text>
                <Button onClick={() => handleSetItems(el)} variant="primary">
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </>
  );
};
