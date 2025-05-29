import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Realisation from "./pages/Realisation";

console.log("App.js est en train de charger");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/realisation/:id" element={<Realisation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
