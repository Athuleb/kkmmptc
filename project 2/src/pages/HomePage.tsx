import React from 'react';
import Slider from 'react-slick';

export const HomePage: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="pt-16">
      <div className="relative">
        <Slider {...sliderSettings}>
          {[
            {
              image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600",
              title: "Welcome to KMMP College",
              subtitle: "Excellence in Technical Education"
            },
            {
              image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600",
              title: "State-of-the-Art Facilities",
              subtitle: "Modern Labs and Workshops"
            },
            {
              image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1600",
              title: "Industry Partnerships",
              subtitle: "Bridging Education and Industry"
            }
          ].map((slide, index) => (
            <div key={index} className="relative h-[500px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};