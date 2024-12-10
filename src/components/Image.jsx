const ImageGrid = () => {
  const images = [
    { src: "/3.png", alt: "Desktop computer setup with multiple monitors" },
    { src: "/4.png", alt: "Laptop displaying data analytics dashboard" },
    { src: "/3.png", alt: "Modern office workspace with technology" },
    { src: "/4.png", alt: "Close-up of computer hardware components" },
  ];

  return (
    <div className="w-full ">
      <div className="flex flex-col sm:flex-row w-full p-6 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;

