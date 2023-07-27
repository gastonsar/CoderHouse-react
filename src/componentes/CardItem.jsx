import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const MostrarCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dba = getFirestore();

    const refCollectionA = collection(dba, "stock");
    setTimeout(() => {
      getDocs(refCollectionA).then((pedido) => {
        setProducts(
          pedido.docs.map((el) => {
            return el.data();
          })
        );
      });
    }, 2000);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Novedades </h1>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.length === 0 ? (
          <Loading />
        ) : (
          <ItemList products = {products}/> //El componente itemList renderiza mis card 
        )}
      </div>
    </>
  );
};
