import { useEffect, useState } from "react"; 
import Productos from "../../Productos/stock.json";
 
export const useList = () => { 
    const [products, setProducts] = useState([]);

    useEffect(() => {
    new Promise((resolve) => {
        setTimeout(() => {
          resolve(Productos);
        }, 2000);
      }).then((result) => setProducts(result));
    }, []);
  
return {products} 
}