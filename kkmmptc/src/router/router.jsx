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

const routerList = {
  home: '/',
  profile: '/profile',
  contact: '/contact',
  gallery: '/gallery',
  news: '/news',
  courses: '/academy/courses',
  courseDetails: '/academy/course-details',
  admission: 'academy/admission',
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
          { path: routerList.courses, element: <Courses /> },
          { path: routerList.courseDetails, element: <CourseDetails /> },
          { path: routerList.admission, element: <Admission /> },
          { path: routerList.news, element: <News /> },
          { path: routerList.gallery, element: <Gallery /> },
          { path: routerList.contact, element: <Contact /> },
          { path: routerList.profile, element: <Profile /> },

          { path: '*', element: <div>404 - Page Not Found!</div> }
        ]
      }
    ],

  },
  { path: '*', element: <div>404 - Page Not Found!</div> }
]);

export default route;