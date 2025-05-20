import { useEffect, useState } from 'react';

function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched images:', data);

        if (Array.isArray(data) && data.length > 0) {
          setImages(data);
        } else {
          console.error('Invalid data format or empty:', data);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="page">
      <h2>Gallery</h2>
      <div>
        {images.length > 0 ? (
          images.map((img, index) => (
            <img
                key={index}
                src={img.url}
                alt={img.description}
                width="200px"
            />

          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
}

export default GalleryPage;
