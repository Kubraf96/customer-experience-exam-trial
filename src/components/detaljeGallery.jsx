export default function DetaljeGallery({ selectedImage, title }) {
  return (
    <div className="gallery product-gallery">
      <div className="main-image product-gallery__main">
        {selectedImage && (
          <img
            src={selectedImage}
            alt={title}
            className="product-gallery__main-image"
          />
        )}
      </div>
    </div>
  );
}
