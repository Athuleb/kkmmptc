import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronDown, User, GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
      isScrolled ? 'bg-white/70' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and College Name */}
          <a href="/" className="flex items-center space-x-3 group">
            <BookOpen size={32} className="text-primary-600 group-hover:text-primary-700 transition-colors" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary-700 leading-tight tracking-wide">KARUNAKARAN MEMORIAL</span>
              <span className="text-sm text-primary-600">MODEL POLYTECHNIC COLLEGE</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/" title="Home" />
            
            {/* Academy Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => handleDropdownClick('academy')}
              >
                <GraduationCap size={20} />
                <span>Academy</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <DropdownLink href="/departments" title="Departments" />
                <DropdownLink href="/faculty" title="Faculty" />
                <DropdownLink href="/courses" title="Courses" />
                <DropdownLink href="/admissions" title="Admissions" />
              </div>
            </div>

            <NavLink href="/gallery" title="Gallery" />
            <NavLink href="/news" title="News" />
            
            {/* Profile Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => handleDropdownClick('profile')}
              >
                <User size={20} />
                <span>Profile</span>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <DropdownLink href="/student-login" title="Student Login" />
                <DropdownLink href="/staff-login" title="Staff Login" />
                <DropdownLink href="/parent-portal" title="Parent Portal" />
              </div>
            </div>

            <NavLink href="/contact" title="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-primary-600 hover:text-primary-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 pb-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
            <div className="p-4 space-y-3">
              <MobileNavLink href="/" title="Home" />
              <MobileDropdown title="Academy" items={[
                { href: '/departments', title: 'Departments' },
                { href: '/faculty', title: 'Faculty' },
                { href: '/courses', title: 'Courses' },
                { href: '/admissions', title: 'Admissions' },
              ]} />
              <MobileNavLink href="/gallery" title="Gallery" />
              <MobileNavLink href="/news" title="News" />
              <MobileDropdown title="Profile" items={[
                { href: '/student-login', title: 'Student Login' },
                { href: '/staff-login', title: 'Staff Login' },
                { href: '/parent-portal', title: 'Parent Portal' },
              ]} />
              <MobileNavLink href="/contact" title="Contact" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <a 
      href={href} 
      className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
    >
      {title}
    </a>
  );
};

const DropdownLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <a 
      href={href} 
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
    >
      {title}
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  title: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, title }) => {
  return (
    <a 
      href={href} 
      className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
    >
      {title}
    </a>
  );
};

interface MobileDropdownProps {
  title: string;
  items: { href: string; title: string; }[];
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button 
        className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown 
          size={16} 
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {items.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="block py-1 text-gray-600 hover:text-primary-600 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};