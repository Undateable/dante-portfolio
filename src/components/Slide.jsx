export default function Slide({ project, onImageClick }) {
  return (
    <div className="slide">
      <div className="video-section">
        <video key={project.videoSrc} controls autoPlay muted>
          <source src={project.videoSrc} type="video/mp4" />
          Tu navegador no soporta video.
        </video>
        <b>{project.title}</b>
        <pre>
          Genre: {project.genre}
          {"\n"}Engine: {project.engine}
          {"\n"}Role: {project.role}
        </pre>
        <p>{project.description}</p>
      </div>
      <div className="images-section">
        {project.images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`Imagen del proyecto ${idx + 1}`}
            className="expandable"
            onClick={() => onImageClick(imgSrc)}
          />
        ))}
      </div>
    </div>
  );
}
        

