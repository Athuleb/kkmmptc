import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Profile from '../pages/Profile';
import Gallery from '../pages/Gallery';
import Pages from '../layout/Pages';
import Courses from '../pages/academy/Courses';
import CourseDetails from '../pages/academy/CourseDetails';
import Admission from '../pages/academy/Admission';
import Activities from '../pages/Activities';
import { path } from 'framer-motion/client';

import Nss from '../pages/activites/Nss';
import BhoomithrasenaClub from "../pages/activites/Boomithrasena";
import IndustryOnCampus from '../pages/activites/IndustryOnCampus';
import TechnicalClub from '../pages/activites/TechnicalClub';
import PlacementCell from '../pages/activites/PlacementCell';
import WomenGrievanceCell from '../pages/activites/WomenGrievanceCell';
import AntiRaggingCell from '../pages/activites/AntiRaggingCell';
import SportsArts from '../pages/activites/SportsArts';
import Academy from '../pages/Academy';

const routerList = {
  home: '/',
  profile: '/profile',
  contact: '/contact',
  gallery: '/gallery',
  news: '/news',
  activities: '/activities',
  academy: '/academy'
};
console.log("roterlist---", routerList);

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h1>OOPS! Something went wrong</h1>
      </div>
    ),
    children: [
      {
        path: '',
        element: <Pages />,
        children: [
          { path: routerList.home, element: <Home /> },
          {
            path: routerList.academy,
            element: <Academy />,
            children: [
              { path: 'courses', element: <Courses /> },
              { path: 'course-details', element: <CourseDetails /> },
              { path: 'admission', element: <Admission /> }
            ]
          },
          { path: routerList.news, element: <News /> },
          { path: routerList.gallery, element: <Gallery /> },
          { path: routerList.contact, element: <Contact /> },
          { path: routerList.profile, element: <Profile /> },
          {
            path: routerList.activities,
            element: <Activities />,
            children: [
              { path: 'nss', element: <Nss /> },
              { path: 'bhoomithrasena-club', element: <BhoomithrasenaClub /> },
              { path: 'industry-on-campus', element: <IndustryOnCampus /> },
              { path: 'technical-club', element: <TechnicalClub /> },
              { path: 'placement-cell', element: <PlacementCell /> },
              { path: 'women-grievance-cell', element: <WomenGrievanceCell /> },
              { path: 'anti-ragging-cell', element: <AntiRaggingCell /> },
              { path: 'sports-and-arts', element: <SportsArts /> },
            ],
          },

          { path: '*', element: <div>404 - Page Not Found!</div> }
        ]
      }
    ],

  },
  { path: '*', element: <div>404 - Page Not Found!</div> }
]);

export default route;