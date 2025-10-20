import React, { useState } from "react";
import Slide from "./Slide";
import ImageModal from "./ImageModal";
import "../assets/css/style.css";

// Datos de cada proyecto
const projects = [
  {
    title: "🏃 Gaucho Runner",
    videoSrc: "./src/assets/video/gauchrun.mp4",
    genre: "Endless Runner, FPS.",
    engine: "Unreal Engine 5.",
    role: "Designer.",
    description: "Designed core mechanics, obstacle patterns, and difficulty scaling. Iterated through player feedback and internal testing to balance speed, challenge, and visual cues.",
    images: [
      "./src/assets/img/gauchorunner1.png",
      "./src/assets/img/gauchorunner2.png",
      "./src/assets/img/gauchorunner3.png"
    ]
  },
  {
    title: "🏆 The Nameless",
    videoSrc: "./src/assets/video/thenameless.mp4",
    genre: "3D first-person shooter with procedural dungeons.",
    engine: "Unreal Engine 5 Blueprints.",
    role: "Designer and Developer.",
    description: "Represented Brinca – Campus de Videojuegos in the official Unreal championship. Designed levels and procedural layouts with enemy spawning systems.",
    images: [
      "./src/assets/img/nameles1.png",
      "./src/assets/img/nameles2.png",
      "./src/assets/img/nameles3.png"
    ]
  },
  {
    title: "🎨 Box Boy (Game Jam – 48h Project)",
    videoSrc: "./src/assets/video/boxboy.mp4",
    genre: "3D puzzle platformer.",
    engine: "Unreal Engine 5 Blueprints.",
    role: "Narrative & Level Designer.",
    description: "Developed in under 48 hours during a game jam. Designed puzzle mechanics based on spatial reasoning and platform manipulation.",
    images: [
      "./src/assets/img/boxboy1.png",
      "./src/assets/img/boxboy.png",
      "./src/assets/img/boxboy3.png"
    ]
  },
  {
    title: "😼 Pawling's Inferno (2DVer.)",
    videoSrc: "./src/assets/video/transformicevdo.mp4",
    genre: "Platformer.",
    engine: "Construct 2.",
    role: "Designer, Artist and Developer.",
    description: "Designed the mechanics, levels and art approach. Designed, drew and painted the assets, made animations, programmed on Construct.",
    images: [
      "./src/assets/img/transformice1png.png",
      "./src/assets/img/transformice2.png",
      "./src/assets/img/transformice3.png"
    ]
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <section>
      <div className="slider-container">
        <div className="slider" id="slider">
          <Slide project={projects[currentIndex]} onImageClick={openModal} />
        </div>
        <button className="nav prev" onClick={prevSlide}>❮</button>
        <button className="nav next" onClick={nextSlide}>❯</button>
      </div>
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </section>
  );
}
