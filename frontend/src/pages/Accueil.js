import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Accueil.css"; // Import du fichier CSS

function Accueil() {
  const [chantiers] = useState([
    { id: 1, nom: "Chantier A", photoUrl: "https://picsum.photos/300/200" },
    { id: 2, nom: "Chantier B", photoUrl: "https://picsum.photos/300/200" },
    { id: 3, nom: "Chantier C", photoUrl: "https://picsum.photos/300/200" },
  ]);

  return (
    <div className="container">
      <header className="accueil-header">
  <h1>Nos Chantiers</h1>
</header>
      <div className="grid">
        {chantiers.map((chantier) => (
          <Link key={chantier.id} to={`/chantier/${chantier.id}`} className="chantier-card">
            <img src={chantier.photoUrl} alt={chantier.nom} />
            <p>{chantier.nom}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
