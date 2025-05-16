import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "My experience at Athena University transformed my career path. The professors were incredibly supportive and the hands-on learning opportunities prepared me for the real world.",
    name: "Sarah Johnson",
    role: "Computer Science, Class of 2023",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    quote: "The collaborative environment at Athena helped me develop both academically and personally. The diverse student body exposed me to new perspectives that broadened my worldview.",
    name: "Michael Chen",
    role: "Business Administration, Class of 2022",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    quote: "Athena University provided me with research opportunities that set the foundation for my career in medicine. The mentorship I received was invaluable.",
    name: "Amara Okafor",
    role: "Biochemistry, Class of 2021",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    quote: "As an international student, I found a welcoming community at Athena. The global perspective of the curriculum prepared me for leadership in a connected world.",
    name: "Carlos Rodriguez",
    role: "International Relations, Class of 2022",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const TestimonialsSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-bold text-primary-700 inline-block section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Student Testimonials
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear from our students about their experiences at Athena University 
            and how our programs have helped shape their futures.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3 py-2">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full testimonial-card">
      <div className="flex justify-start mb-4 text-accent-500">
        <Quote size={32} />
      </div>
      
      <p className="text-gray-600 mb-6">"{quote}"</p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-primary-700">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};