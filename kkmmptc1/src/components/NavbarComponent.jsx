import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-2xl font-bold text-blue-600">JourneyScope</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/explore" className="hover:text-blue-500 transition duration-300">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
