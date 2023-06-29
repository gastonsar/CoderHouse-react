import { useState } from "react";
import { NavBar } from "./componentes/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { MostrarCard } from "./componentes/CardItem";

export default function App() {
  const [chango, setChango] = useState(0)
  return (
    <>
      <NavBar chango ={chango} />
  <MostrarCard setChango={setChango} />
    
    </>

  );
}
