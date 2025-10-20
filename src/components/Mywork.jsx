import "./Mywork.css"; // Usamos un CSS aparte para mantener orden

const Mywork = () => {
  return (
    <section className="mywork-section">
      <h2 className="heading">
        My <span>Work</span>
      </h2>

      <div className="mywork-container">
        <div className="mywork-item">
          <h3>Mechanics</h3>
          <a className="work-i" href="https://drive.google.com/file/d/1yqdm5aG-grc7oh30MLb1XD6Im3cjXWE3/view?usp=drive_link" target="_blank"><i class='bxr  bx-note'></i></a> 
        </div>
        <div className="mywork-item">
          <h3>Dialogos</h3>
          <a className="work-i" href="https://drive.google.com/file/d/15FIeneu5QnX_hy4iTvMFmylWtE6Hs9xZ/view?usp=drive_link" target="_blank"><i class='bxr  bx-note'></i></a> 
        </div>
        <div className="mywork-item">
          <h3>Personajes</h3>
          <a className="work-i" href="https://drive.google.com/file/d/1vUDmwd0dGGvYMQ8N8I0jOIvp53COqblu/view?usp=drive_link" target="_blank"><i class='bxr  bx-note'></i></a> 
        </div>
      </div>
    </section>
  );
};

export default Mywork;
