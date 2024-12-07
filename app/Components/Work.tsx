"use client";
import { useState, useEffect } from "react";

const Work: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image data
  const slides = [
    {
      src: "/work1.png",
      description: "Innovative Web Design",
      paragraph:
        "This project showcases a modern and responsive web design, integrating user-friendly interfaces with cutting-edge technology.",
    },
    {
      src: "/work2.png",
      description: "Mobile App Development",
      paragraph:
        "A sleek, efficient mobile app that enhances productivity and user engagement with its intuitive features.",
    },
    {
      src: "/work3.png",
      description: "Data Visualization",
      paragraph:
        "A powerful data visualization tool that simplifies complex datasets for better decision-making.",
    },
  ];

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer); // Cleanup timer
  }, [slides.length]);

  // Handle button navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="p-12 bg-gray-50 text-black pt-32">
      {/* Section Title */}
      <h1 className="text-7xl mb-12">
        Featured{" "}
        <i className="text-[#145b2f]" style={{ fontFamily: "Times New Roman" }}>
          Works
        </i>
      </h1>

      {/* Slideshow Container */}
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 space-x-10"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full text-left">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="max-w-7xl h-auto object-cover mx-auto rounded-lg"
              />
              {/* Description and Paragraph */}
              <h2 className="text-3xl mt-6 font-bold">{slide.description}</h2>
              <p className="text-lg mt-2 text-gray-600">{slide.paragraph}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-6 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentSlide === index ? "bg-[#145b2f]" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)} // Navigate to the clicked slide
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
