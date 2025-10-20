import "../assets/css/style.css";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading">Mi <span>Educación</span></h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">Formación Académica</h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaGraduationCap /> 2020 - 2023
                </div>
                <h3>Tecnicatura en Análisis de Sistemas - UTN</h3>
                <p>Formación técnica en análisis, desarrollo y mantenimiento de sistemas de software.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaGraduationCap /> 2024
                </div>
                <h3>Curso de Maquetado Web - UTN</h3>
                <p>12 clases prácticas enfocadas en HTML, CSS y desarrollo web responsivo.</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaGraduationCap /> En curso
                </div>
                <h3>Estudios autodidactas</h3>
                <p>Especialización continua en React, diseño web y herramientas de desarrollo moderno.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
