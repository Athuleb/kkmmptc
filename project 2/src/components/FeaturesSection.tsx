import React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  Code, 
  Briefcase, 
  Laptop, 
  PencilRuler, 
  Stethoscope, 
  Building, 
  Book 
} from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const programs = [
  {
    icon: <Microscope size={36} />,
    title: 'Sciences',
    description: 'Explore the natural world through biology, chemistry, physics, and environmental science programs.'
  },
  {
    icon: <Code size={36} />,
    title: 'Computer Science',
    description: 'Develop cutting-edge skills in programming, AI, data science, and cybersecurity.'
  },
  {
    icon: <Briefcase size={36} />,
    title: 'Business',
    description: 'Prepare for leadership roles with programs in management, finance, marketing, and entrepreneurship.'
  },
  {
    icon: <Stethoscope size={36} />,
    title: 'Healthcare',
    description: 'Make a difference in healthcare through nursing, public health, and pre-medical studies.'
  },
  {
    icon: <PencilRuler size={36} />,
    title: 'Arts & Design',
    description: 'Express your creativity through fine arts, digital media, graphic design, and architecture.'
  },
  {
    icon: <Book size={36} />,
    title: 'Humanities',
    description: 'Explore human culture through literature, philosophy, history, and cultural studies.'
  },
  {
    icon: <Building size={36} />,
    title: 'Engineering',
    description: 'Build the future with programs in civil, mechanical, electrical, and chemical engineering.'
  },
  {
    icon: <Laptop size={36} />,
    title: 'Online Learning',
    description: 'Access world-class education from anywhere with our flexible online degree programs.'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-bold text-primary-700 inline-block section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Academic Programs
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover your passion and build your future with our diverse range of undergraduate 
            and graduate programs designed to prepare you for success in a rapidly changing world.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md feature-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary-700 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};