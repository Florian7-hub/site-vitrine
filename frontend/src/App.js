import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Chantier from "./pages/Chantier";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/chantier/:id" element={<Chantier />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
