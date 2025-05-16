import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

interface SlideProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const slides: SlideProps[] = [
  {
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Welcome to Athena University',
    subtitle: 'Empowering Minds, Shaping Futures',
    buttonText: 'Explore Programs'
  },
  {
    image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'World-Class Education',
    subtitle: 'Learn from Industry Leaders and Academic Experts',
    buttonText: 'Meet Our Faculty'
  },
  {
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'State-of-the-Art Facilities',
    subtitle: 'Modern Campus Designed for Collaborative Learning',
    buttonText: 'Take a Tour'
  }
];

export const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false
  };

  return (
    <div className="hero-slider relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <HeroSlide 
            key={index}
            image={slide.image}
            title={slide.title}
            subtitle={slide.subtitle}
            buttonText={slide.buttonText}
          />
        ))}
      </Slider>
    </div>
  );
};

const HeroSlide: React.FC<SlideProps> = ({ image, title, subtitle, buttonText }) => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      
      <div className="container mx-auto h-full px-4 md:px-8">
        <div className="flex flex-col justify-center h-full pt-16 md:pt-0 md:max-w-2xl">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="#programs" 
              className="inline-block px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full text-lg transition-all cta-button"
            >
              {buttonText}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};