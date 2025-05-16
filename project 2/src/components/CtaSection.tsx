import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section id="apply" className="py-20 bg-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-accent-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Begin Your Journey at Athena University
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Take the first step toward a transformative educational experience that will prepare you 
                for success in your career and life.
              </p>
              
              <div className="space-y-4">
                <CtaButton 
                  text="Apply Now" 
                  href="#" 
                  primary 
                />
                <CtaButton 
                  text="Request Information" 
                  href="#" 
                  primary={false} 
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary-700 mb-6">Key Dates & Deadlines</h3>
                
                <div className="space-y-4">
                  <DateItem 
                    title="Early Decision Application" 
                    date="November 15, 2025" 
                  />
                  <DateItem 
                    title="Regular Application" 
                    date="January 10, 2026" 
                  />
                  <DateItem 
                    title="Financial Aid Priority Deadline" 
                    date="February 1, 2026" 
                  />
                  <DateItem 
                    title="Transfer Student Deadline" 
                    date="March 15, 2026" 
                  />
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a 
                    href="#" 
                    className="flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors"
                  >
                    <span>View Full Academic Calendar</span>
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CtaButtonProps {
  text: string;
  href: string;
  primary: boolean;
}

const CtaButton: React.FC<CtaButtonProps> = ({ text, href, primary }) => {
  return (
    <a 
      href={href} 
      className={`inline-block px-8 py-3 rounded-full text-lg font-semibold transition-all cta-button w-full text-center md:w-auto ${
        primary 
          ? 'bg-accent-500 hover:bg-accent-600 text-white' 
          : 'bg-white hover:bg-gray-100 text-primary-700'
      }`}
    >
      {text}
    </a>
  );
};

interface DateItemProps {
  title: string;
  date: string;
}

const DateItem: React.FC<DateItemProps> = ({ title, date }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium text-gray-800">{title}</span>
      <span className="text-primary-600 font-semibold">{date}</span>
    </div>
  );
};