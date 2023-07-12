import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { NavBar } from "./componentes/NavBar";
import { MostrarCard } from "./componentes/CardItem";
import { Invierno } from "./componentes/Invierno"; 
import { Acc} from "./componentes/Accesorios";

export default function App() {
  const [chango, setChango] = useState(0)
  return (
    <>
      <NavBar chango ={chango} />
 <Routes>
<Route
path="/"
element= {<MostrarCard setChango={setChango} />}
/>
<Route 
path='/invierno' 
element = {<Invierno/>}
/>
<Route
path="/lineacasual"
 element ={<Acc/>}
/>

 </Routes>
    </>

  );
}
