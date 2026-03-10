import { useState } from "react";

export default function DetaljeGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "");

  return (
    <div className="gallery product-gallery">
      <div className="thumbnails product-gallery__thumbnails">
        {images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setSelectedImage(img)}
            className={`product-gallery__thumb ${selectedImage === img ? "is-active active" : ""}`}
          />
        ))}
      </div>

      <div className="main-image product-gallery__main">
        {selectedImage && (
          <img
            src={selectedImage}
            alt=""
            className="product-gallery__main-image"
          />
        )}
      </div>
    </div>
  );
}
