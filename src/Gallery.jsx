import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import "./Gallery.css";

function MyGallery({images}) {
  const galleryRef = useRef(null);

  return (
    <div className="gallery-container">
    <ImageGallery
      ref={galleryRef}
      items={images}
      onSlide={(index) => console.log("Slid to", index)}
    />
    </div>
  );
}

export default MyGallery;