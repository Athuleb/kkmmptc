import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
const Home = React.lazy(() => import('../pages/Home'));
const Contact = React.lazy(() => import('../pages/Contact'));
const PlacementCell = React.lazy(() => import('../pages/PlacementCell'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Gallery = React.lazy(() => import('../pages/Gallery'));
const Courses = React.lazy(() => import('../pages/academy/Courses'));
const CourseDetails = React.lazy(() => import('../pages/academy/CourseDetails'));
const Admission = React.lazy(() => import('../pages/academy/Admission'));
const Activities = React.lazy(() => import('../pages/Activities'));
const Academy = React.lazy(() => import('../pages/Academy'));


import Nss from '../pages/activites/Nss';
import BhoomithrasenaClub from "../pages/activites/Boomithrasena";
import IndustryOnCampus from '../pages/activites/IndustryOnCampus';
import TechnicalClub from '../pages/activites/TechnicalClub';
import WomenGrievanceCell from '../pages/activites/WomenGrievanceCell';
import AntiRaggingCell from '../pages/activites/AntiRaggingCell';
import SportsArts from '../pages/activites/SportsArts';
import AboutUs from '../pages/profile/AboutUs';
import VisionMission from '../pages/profile/VisionMission';
import Principal from '../pages/profile/Principal';
import Administration from '../pages/profile/Administration';
import Department from '../pages/academy/Department';
import IIC from '../pages/activites/IIC';
import AntiDrugCell from '../pages/activites/AntiDrugCell';
import IQAC from '../pages/activites/IQAC';
import AcademicCouncil from '../pages/activites/AcademicCouncil';
import CollegeSenate from '../pages/activites/CollegeSenate';
import PTA from '../pages/activites/PTA';





const routerList = {
  home: '/',
  profile: '/profile',
  contact: '/contact',
  gallery: '/gallery',
  Placement: '/placement-cell',
  activities: '/activities',
  academy: '/academy',
};

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
      { path: routerList.home, element: <Home /> },
      {
        path: routerList.academy,
        element: <Academy />,
        children: [
          { path: 'courses', element: <Courses /> },
          { path: 'course-details', element: <CourseDetails /> },
          { path: 'admission', element: <Admission /> },
          { path: 'department', element: <Department /> }

        ]
      },
      { path: routerList.Placement, element: <PlacementCell /> },
      { path: routerList.gallery, element: <Gallery /> },
      { path: routerList.contact, element: <Contact /> },
      {
        path: routerList.profile,
        element: <Profile />,
        children: [
          { path: 'about-us', element: <AboutUs /> },
          { path: 'vision-mission', element: <VisionMission /> },
          { path: 'principal', element: <Principal /> },
          { path: 'administration', element: <Administration /> },
        ]
      },
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
          { path: 'iic', element: <IIC /> },
          { path: 'anti-drug-cell', element: <AntiDrugCell /> },
          { path: 'college-senate', element: <CollegeSenate /> },
          { path: 'academic-council', element: <AcademicCouncil /> },
          { path: 'iqac', element: <IQAC /> },
          { path: 'pta', element: <PTA/> },
        ],
      },
      { path: '*', element: <div>404 - Page Not Found!</div> }
    ]
  }
]);

export default route;
