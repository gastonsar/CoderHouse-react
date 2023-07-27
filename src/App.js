import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { NavBar } from "./componentes/NavBar";
import { MostrarCard } from "./componentes/CardItem";
import { Invierno } from "./componentes/Invierno";
import { Acc } from "./componentes/Accesorios";
import "./App.css";
import { Footer } from "./componentes/Footer";
import { MycontextProvider } from "./context/context";


export default function App() {
  const [items, setItems] = useState([]);

  const handleSetItems = (el) => {
    setItems((prev) => [...prev, el]);
  }; 
  

  return (
    <>
   <MycontextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <MostrarCard
                setItems={setItems}
                handleSetItems={handleSetItems}
              />
            }
          />
          <Route
            path="/invierno"
            element={
              <Invierno setItems={setItems} handleSetItems={handleSetItems} />
            }
          />
          <Route
            path="/accesorios"
            element={
              <Acc
                setItems={setItems}
                handleSetItems={handleSetItems}
                items={items}
              />
            }
          />
          <Route path="/resumen" />
        </Routes>
        </MycontextProvider>
      <Footer />
    </>
  );
}
