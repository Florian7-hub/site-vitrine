import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Chantier from "./pages/Chantier";

console.log("App.js est en train de charger");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/chantier/:id" element={<Chantier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
