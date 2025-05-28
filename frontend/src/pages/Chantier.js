import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Chantier.css";

function Chantier() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [chantier] = useState({
    id: id,
    nom: `Chantier ${id}`,
    photoPrincipale: "https://picsum.photos/600/400",
    photos: [
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
    ],
  });

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate("/")}>← Retour</button>
      <header className="chantier-header">
        <h1>{chantier.nom}</h1>
      </header>
      <img className="main-photo" src={chantier.photoPrincipale} alt={chantier.nom} />
      <div className="gallery">
        {chantier.photos.map((photo, index) => (
          <img key={index} className="gallery-photo" src={photo} alt="Chantier" />
        ))}
      </div>
    </div>
  );
}

export default Chantier;
