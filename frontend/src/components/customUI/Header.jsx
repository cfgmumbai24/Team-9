import { useState } from "react";
import { Carousel } from "flowbite-react";

function HeaderCarousel({ images, headerText, descriptionText }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-64 md:h-96">
        <Carousel
          className="rounded-lg overflow-hidden"
          showIndicators={false}
          showStatus={false}
          selectedItem={currentIndex}
          onChange={setCurrentIndex}
        >
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Slide ${index}`} />
          ))}
        </Carousel>
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-3xl font-bold">{headerText}</h1>
        <p className="text-gray-600 mt-2">{descriptionText}</p>
      </div>
    </div>
  );
}

export default HeaderCarousel;
