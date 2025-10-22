import React, { useState } from "react";
import Slide from "./Slide";
import ImageModal from "./ImageModal";
import "../assets/css/style.css";

// GauchRunner Images
import gaucho1 from '../assets/img/gauchorunner1.png';
import gaucho2 from '../assets/img/gauchorunner2.png';
import gaucho3 from '../assets/img/gauchorunner3.png';
import gauchoVideo from '../assets/video/gauchrun.mp4';

// The Nameless Images
import nameless1 from '../assets/img/nameles1.png';
import nameless2 from '../assets/img/nameles2.png';
import nameless3 from '../assets/img/nameles3.png';
import namelessVideo from '../assets/video/thenameless.mp4';

// Box Boy Images
import boxboy1 from '../assets/img/boxboy1.png';
import boxboy2 from '../assets/img/boxboy.png';      
import boxboy3 from '../assets/img/boxboy3.png';
import boxboyVideo from '../assets/video/boxboy.mp4';

// Pawling's Inferno Images
import pawling1 from '../assets/img/transformice1.png';     
import pawling2 from '../assets/img/transformice2.png';
import pawling3 from '../assets/img/transformice3.png';
import pawlingVideo from '../assets/video/transformicevdo.mp4';


// Datos de cada proyecto
const projects = [
  {
    title: "🏃 Gaucho Runner",
    videoSrc: gauchoVideo,
    genre: "Endless Runner, FPS.",
    engine: "Unreal Engine 5.",
    role: "Designer.",
    description:
      "Designed core mechanics, obstacle patterns, and difficulty scaling. Iterated through player feedback and internal testing to balance speed, challenge, and visual cues.",
    images: [gaucho1, gaucho2, gaucho3],
  },
  {
    title: "🏆 The Nameless",
    videoSrc: namelessVideo,
    genre: "3D first-person shooter with procedural dungeons.",
    engine: "Unreal Engine 5 Blueprints.",
    role: "Designer and Developer.",
    description:
      "Represented Brinca – Campus de Videojuegos in the official Unreal championship. Designed levels and procedural layouts with enemy spawning systems.",
    images: [nameless1, nameless2, nameless3],
  },
  {
    title: "🎨 Box Boy (Game Jam – 48h Project)",
    videoSrc: boxboyVideo,
    genre: "3D puzzle platformer.",
    engine: "Unreal Engine 5 Blueprints.",
    role: "Narrative & Level Designer.",
    description:
      "Developed in under 48 hours during a game jam. Designed puzzle mechanics based on spatial reasoning and platform manipulation.",
    images: [boxboy1, boxboy2, boxboy3],
  },
  {
    title: "😼 Pawling's Inferno (2DVer.)",
    videoSrc: pawlingVideo,
    genre: "Platformer.",
    engine: "Construct 2.",
    role: "Designer, Artist and Developer.",
    description:
      "Designed the mechanics, levels and art approach. Designed, drew and painted the assets, made animations, programmed on Construct.",
    images: [pawling1, pawling2, pawling3],
  },
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
