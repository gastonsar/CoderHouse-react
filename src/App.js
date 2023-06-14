import Carrito from "./componentes/Carrito";
import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";

export default function App() {
  
  return (
    <>
      <NavBar />
     <ItemListContainer alineacion= 'center' bgColor='blue'  greeting= 'Productos Destacados!' /> 
    </>
  );
}
