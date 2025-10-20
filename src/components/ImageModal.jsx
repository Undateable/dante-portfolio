export default function ImageModal({ image, onClose }) {
  return (
    <div className="modal" style={{ display: "block" }}>
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={image} alt="Imagen ampliada" />
    </div>
  );
}
