import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main';
import Instructors from './pages/Instructors/Instructors';
import Classes from './pages/Classes/Classes';
import Dashboard from './Layout/Dashboard';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'instructors',
        element:<Instructors></Instructors>
      },
      {
        path:'/classes',
        element:<Classes></Classes>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
  {
    path:'/Dashboard',
    element:<Dashboard></Dashboard>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);