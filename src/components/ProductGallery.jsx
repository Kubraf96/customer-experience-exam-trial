import { useState } from "react";

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "");

  return (
    <div className="gallery">
      <div className="thumbnails">
        {images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setSelectedImage(img)}
            className={selectedImage === img ? "active" : ""}
          />
        ))}
      </div>

      <div className="main-image">
        {selectedImage && <img src={selectedImage} alt="" />}
      </div>
    </div>
  );
}
