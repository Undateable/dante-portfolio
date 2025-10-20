import "../assets/css/style.css";
import homeImage from "../assets/img/image.jpg";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Dante</span></h1>
        <h3 className="text-animation">I'm a <span></span></h3>
        <p>
          Game and Narrative Designer, with experience in Unreal Engine and Unity
          and a background in IT. Passionate about creating mechanics and levels
          that enhance player experience. Participated in the Unreal Championship
          and worked on several game design and production projects. Seeking to
          contribute creativity and technical analysis to innovative game
          development.
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/dpentito/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Undateable" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:pentitodante2@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
          <a href="https://dannette.itch.io/" target="_blank" rel="noopener noreferrer">
            <i className="bx bx-home-smile"></i>
          </a>
        </div>

        <div className="btn-group">
          <a href="#" className="btn">Hire</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>

      <div className="home-img">
        <img src={homeImage} alt="Foto Dante" />
      </div>
    </section>
  );
}
