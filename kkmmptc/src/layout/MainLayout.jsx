import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import Pages from './Pages';

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 overflow-hidden">
      <header className='sticky-top shadow'>
        <NavbarComponent />
      </header>

      <main className="flex-grow-1 overflow-hidden  d-flex align-items-center justify-content-center p-0 w-100">
        <Pages />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

