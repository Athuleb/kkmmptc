// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Academy from "../pages/Academy";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import routerList from "./routerList";


const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div className="flex justify-center items-center">
      <h1>OOPS ! something went wrong</h1>
    </div>,
    children: [
      { path: routerList.home, element: <Home /> },
      { path: routerList.academy, element: <Academy /> },
      { path: routerList.news, element: <News /> },
      { path: routerList.gallery, element: <Gallery /> },
      { path: routerList.contact, element: <Contact /> },
      { path: routerList.profile, element: <Profile /> },
       { path: "**", element: <div>404 page not fount !</div> }
    ],
  },
  { path: "**", element: <div>404 page not fount !</div> }
]);

export default route;
