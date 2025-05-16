import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
