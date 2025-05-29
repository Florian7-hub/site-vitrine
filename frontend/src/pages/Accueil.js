import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Accueil.css"; // Import du fichier CSS

function Accueil() {
  const [realisations] = useState([
    { id: 1, nom: "Réalisation A", photoUrl: "https://picsum.photos/300/200" },
    { id: 2, nom: "Réalisation B", photoUrl: "https://picsum.photos/300/201" },
    { id: 3, nom: "Réalisation C", photoUrl: "https://picsum.photos/300/202" },
  ]);

  return (
    <div className="container">
      <header className="accueil-header">
        <h1>Les réalisations</h1>
      </header>
      <div className="grid">
        {realisations.map((realisation) => (
          <Link key={realisation.id} to={`/realisation/${realisation.id}`} className="realisation-card">
            <img src={realisation.photoUrl} alt={realisation.nom} />
            <p>{realisation.nom}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Accueil;