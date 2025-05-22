import React from 'react';
import Home from '../pages/Home';
import Academy from '../pages/Academy';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Profile from '../pages/Profile';
import Gallery from '../pages/Gallery';
import { Outlet } from 'react-router-dom';

function Pages() {
  return (
    <>
    <Outlet/>
    </>
  );
}

export default Pages;
