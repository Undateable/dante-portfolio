// src/components/Skills.jsx
import React from "react";
import "./Skills.css"; // Usamos un CSS aparte para mantener orden

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        <div className="skill-item">
          <h3>Game Engines & Tools:</h3>
          <p>Unreal Engine, Unity, GitHub, Visual Studio, Articy.</p>
        </div>
        <div className="skill-item">
          <h3>Programming & Scripting:</h3>
          <p>C++, C#, Blueprint.</p>
        </div>
        <div className="skill-item">
          <h3>Game Design:</h3>
          <p>Office, Mechanics Design, Level Design, Gameplay Loop,
          Balancing.
          </p>
        </div>
        <div className="skill-item">
          <h3>Narrative Design:</h3>
          <p>Story Structure, Dialogue Writing, Worldbuilding,
          Branching Narratives.
          </p>
        </div>
        <div className="skill-item">
          <h3>Other Skills:</h3>
          <p>Creative Process, Team Collaboration, Communication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

