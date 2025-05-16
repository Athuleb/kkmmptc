import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import Scrolldown from './Scrolldown';

export default function MainLayout() {
  return (
    <>
      <NavbarComponent />
      <main className="min-vh-100">
        <Scrolldown />
      </main>
      <Footer />
    </>
  );
}
