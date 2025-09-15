import React, { useState, useEffect } from "react";

// Importa todas las imágenes desde src/assets/banner
const images = Object.values(
  import.meta.glob('../assets/banner/*.{jpg,jpeg,png}', { eager: true })
).map(mod => mod.default);

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null); // índice de la imagen abierta
  const intervalTime = 5000;

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  if (!images.length) return <p>No hay imágenes en el banner</p>;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Estilos
  const containerStyle = {
    width: "90%",
    maxWidth: "1200px",
    height: "500px",
    margin: "2rem auto",
    position: "relative",
    border: "6px solid rgba(0,0,0,0.3)",
    borderRadius: "16px",
    overflow: "hidden",
    boxSizing: "border-box",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
  };

  const imgStyle = (isActive) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    transform: "translate(-50%, -50%)",
    transition: "opacity 1s ease-in-out",
    opacity: isActive ? 1 : 0,
  });

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "2rem",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "0.5rem 1rem",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 2,
    userSelect: "none",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginTop: "1rem",
  };

  const subtitleStyle = {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#555",
    maxWidth: "900px",
    margin: "0.5rem auto 1.5rem auto",
  };

  // Estilos para lightbox
  const lightboxStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    cursor: "pointer",
  };

  const lightboxImgStyle = {
    maxWidth: "90%",
    maxHeight: "90%",
    objectFit: "contain",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  };

  return (
    <div>
      <h1 style={titleStyle}>Bienvenido a Raíz del Maule</h1>
      <p style={subtitleStyle}>
        Descubre lugares, actividades y experiencias únicas en nuestra hermosa región del Maule.
      </p>

      {/* Carrusel */}
      <div style={containerStyle}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`banner-${index}`}
            style={imgStyle(index === current)}
            onClick={() => setLightbox(index)} // abre lightbox al hacer click
          />
        ))}

        {/* Flechas */}
        <div style={{ ...arrowStyle, left: "10px" }} onClick={prevSlide}>
          &#10094;
        </div>
        <div style={{ ...arrowStyle, right: "10px" }} onClick={nextSlide}>
          &#10095;
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div style={lightboxStyle} onClick={() => setLightbox(null)}>
          <img src={images[lightbox]} alt={`lightbox-${lightbox}`} style={lightboxImgStyle} />
        </div>
      )}
    </div>
  );
}
