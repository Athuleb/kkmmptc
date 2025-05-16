import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-700 section-heading">
              About Athena University
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1965, Athena University has been a beacon of academic excellence for over six decades. 
              Our institution is committed to providing a transformative educational experience that prepares students 
              to tackle the challenges of tomorrow.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With a diverse community of scholars, researchers, and innovators, we foster an environment 
              where critical thinking, creativity, and collaboration thrive. Our graduates go on to become 
              leaders in their fields, driving positive change across the globe.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard icon={<GraduationCap size={24} />} title="15,000+" description="Students Enrolled" />
              <StatCard icon={<BookOpen size={24} />} title="200+" description="Academic Programs" />
              <StatCard icon={<Award size={24} />} title="98%" description="Employment Rate" />
            </div>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Campus Life" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Library" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Collaboration" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Graduation" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg text-center">
      <div className="flex justify-center mb-2 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary-700 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};