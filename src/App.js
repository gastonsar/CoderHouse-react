import { Form, Route, Routes } from "react-router-dom";
import { useState} from "react";
import { NavBar } from "./componentes/NavBar";
import { MostrarCard } from "./componentes/CardItem";
import { Invierno } from "./componentes/Invierno";
import { Acc } from "./componentes/Accesorios";
import "./App.css";
import { Footer } from "./componentes/Footer";
import { ThemeContext } from "./context/context";
import { ResumenProductos } from "./componentes/Resumen";



export default function App() {
  const [items, setItems] = useState([]);

  const handleSetItems = (el) => {
    setItems((prev) => [...prev, el]);
  };

  return (
    <>
      <ThemeContext.Provider value={items}>
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
          <Route path="/resumen" 
          element={<ResumenProductos productos={items} />}
       />
        
       
        </Routes>
      </ThemeContext.Provider>
      <Footer />
    </>
  );
}
