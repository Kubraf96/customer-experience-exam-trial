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

// SelectedImage er den store billede i detalje siden, og title er produktets navn, som bruges i alt teksten for billedet.

// Hvis billedet findes vises det, ellers viser det alt teksten, som er produktets navn.
