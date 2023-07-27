import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

 export const MycontextProvider = ({children}) => {
  const [items, setItems] = useState([]);

  const handleSetItems = (el) => {
    setItems((prev) => [...prev, el]);
  };

  const clear = () => {
    setItems([]);
  };

return (

<CartContext.Provider value={{items,handleSetItems,clear}} > 

{children} 

</CartContext.Provider>

)

};
