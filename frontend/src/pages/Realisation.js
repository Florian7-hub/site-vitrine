import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Realisation.css"; // Mise à jour du chemin CSS

function Realisation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [realisation] = useState({
    id: id,
    nom: `Réalisation ${id}`,
    photoPrincipale: "https://picsum.photos/600/400",
    photos: [
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
    ],
    description: "Cette réalisation représente une avancée majeure dans notre projet. Nous travaillons activement pour garantir une qualité irréprochable."
  });

  const [zoomedImage, setZoomedImage] = useState(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const changeImage = (direction) => {
    if (!zoomedImage) return;
    const newIndex = zoomedImage.index + direction;
    if (newIndex >= 0 && newIndex < realisation.photos.length) {
      setZoomedImage({ src: realisation.photos[newIndex], index: newIndex });
    }
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate("/")}>← Retour</button>
      <header className="realisation-header">
        <h1>{realisation.nom}</h1>
      </header>
      <div className="realisation-content">
        <img className="main-photo" src={realisation.photoPrincipale} alt={realisation.nom} />
        <div className="description-container">
          <p className="realisation-description">{realisation.description}</p>
        </div>
      </div>
      <div className="gallery">
        {realisation.photos.map((photo, index) => (
          <img
            key={index}
            className="gallery-photo"
            src={photo}
            alt="Réalisation"
            onClick={() => setZoomedImage({ src: photo, index })}
          />
        ))}
      </div>

      {/* Modal Zoom */}
      {zoomedImage && (
        <div className="zoom-modal" onClick={() => setZoomedImage(null)}>
          <img
            className={`zoomed-photo ${isMaximized ? "maximized" : ""}`}
            src={zoomedImage.src}
            alt="Zoomed"
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
          />
          <button className="close-button" onClick={(e) => {
            e.stopPropagation();
            setZoomedImage(null);
          }}>✖</button>
          {zoomedImage.index > 0 && (
            <button className="nav-button left" onClick={(e) => {
              e.stopPropagation();
              changeImage(-1);
            }}>◀</button>
          )}
          {zoomedImage.index < realisation.photos.length - 1 && (
            <button className="nav-button right" onClick={(e) => {
              e.stopPropagation();
              changeImage(1);
            }}>▶</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Realisation;