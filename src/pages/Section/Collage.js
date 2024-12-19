import React, { useState } from "react";
import "./Collage.css";

// Dynamically import all images from the specified folder
const importAll = (requireContext) =>
  requireContext.keys().map(requireContext);

const images = importAll(
  require.context("./more-insta-photos", false, /\.(png|jpe?g|svg)$/)
);

function Collage() {
  const [selectedImage, setSelectedImage] = useState(null); // State to track selected image

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image
  };

  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image
  };

  const getRandomLayout = (index) => {
    const layouts = [
      { column: 2, row: 2 }, // Large
      { column: 1, row: 1 }, // Small
      { column: 2, row: 1 }, // Wide
      { column: 1, row: 2 }, // Tall
    ];
    return layouts[index % layouts.length]; // Cycle through layouts
  };

  return (
    <div className="collage-section">
      <h2 className="collage-title">#ASHLEY ON INSTA</h2>
      <div className="collage-grid">
        {images.map((image, index) => {
          const layout = getRandomLayout(index);
          return (
            <div
              className="collage-item"
              key={index}
              style={{
                gridColumn: `span ${layout.column}`,
                gridRow: `span ${layout.row}`,
              }}
              onClick={() => handleImageClick(image)} // Trigger modal on click
            >
              <img src={image} alt={`Collage ${index + 1}`} />
            </div>
          );
        })}
      </div>

      {/* Modal Section */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Collage;
