import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const MostrarCard = ({ handleSetItems }) => {
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
          <ItemList product={products} handleSetItems={handleSetItems} /> //El componente itemList renderiza mis card y le paso como prop mi funcion que me actualiza el estado del carrito y la funcion que lo aumenta
        )}
      </div>
    </>
  );
};
