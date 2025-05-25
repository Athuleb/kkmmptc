// src/App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import route from './router/router.jsx';
import './App.css';

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
