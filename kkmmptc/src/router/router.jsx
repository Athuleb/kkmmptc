import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Academy from '../pages/Academy';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Profile from '../pages/Profile';
import Gallery from '../pages/Gallery';
import Pages from '../layout/Pages';


const routerList = {
  home: '/',
  academy: '/academy',
  profile: '/profile',
  contact: '/contact',
  gallery: '/gallery',
  news: '/news'
};
console.log("roterlist---",routerList);

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h1>OOPS! Something went wrong</h1>
      </div>
    ),
    children:[
      {
      path:'',
       element: <Pages/>,
       children: [
      { path: routerList.home, element: <Home /> },
      { path: routerList.academy, element: <Academy /> },
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