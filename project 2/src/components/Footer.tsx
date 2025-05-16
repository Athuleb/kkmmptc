import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen size={32} className="text-primary-500 mr-2" />
              <div className="flex flex-col">
                <span className="font-bold">KARUNAKARAN MEMORIAL</span>
                <span className="text-sm">MODEL POLYTECHNIC COLLEGE</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with quality technical education and practical skills for a successful future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/departments" text="Departments" />
              <FooterLink href="/admissions" text="Admissions" />
              <FooterLink href="/facilities" text="Facilities" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Student Corner</h3>
            <ul className="space-y-2">
              <FooterLink href="/student-login" text="Student Portal" />
              <FooterLink href="/library" text="Library" />
              <FooterLink href="/events" text="Events" />
              <FooterLink href="/placements" text="Placements" />
              <FooterLink href="/scholarships" text="Scholarships" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-primary-500 mr-2 mt-1" size={18} />
                <span className="text-gray-400">123 College Road, Kerala, India - 682021</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-500 mr-2" size={18} />
                <span className="text-gray-400">+91 484 2424242</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary-500 mr-2" size={18} />
                <span className="text-gray-400">info@kmmp.edu.in</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} KMMP College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white transition-colors">
        {text}
      </a>
    </li>
  );
};