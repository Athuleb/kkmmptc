import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  date: string;
  title: string;
  description: string;
  location: string;
  time: string;
  image: string;
}

const events: EventCardProps[] = [
  {
    date: 'Oct 15',
    title: 'Fall Open House',
    description: 'Tour our campus, meet faculty and current students, and learn about our programs.',
    location: 'Main Campus',
    time: '10:00 AM - 3:00 PM',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    date: 'Nov 3',
    title: 'Science & Technology Expo',
    description: 'Explore innovative research projects and meet industry partners.',
    location: 'Science Building',
    time: '1:00 PM - 5:00 PM',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    date: 'Nov 18',
    title: 'Admissions Workshop',
    description: 'Get help with your application and learn about financial aid opportunities.',
    location: 'Student Center',
    time: '4:00 PM - 6:00 PM',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-bold text-primary-700 inline-block section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us for these exciting events and become part of our vibrant community. 
            Experience firsthand what makes Athena University special.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              location={event.location}
              time={event.time}
              image={event.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold rounded-full text-lg transition-all cta-button"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

const EventCard: React.FC<EventCardProps> = ({ date, title, description, location, time, image }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-accent-500 text-white font-bold py-2 px-4 rounded-lg">
          {date}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-700 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-gray-500">
          <Clock size={16} className="mr-2" />
          <span>{time}</span>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <a 
          href="#" 
          className="inline-block w-full py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold rounded-lg text-center transition-colors"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};