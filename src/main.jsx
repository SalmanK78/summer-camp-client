import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Instructors from "./pages/Instructors/Instructors";
import Classes from "./pages/Classes/Classes";
import Dashboard from "./Layout/Dashboard";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AuthProvider from "./Provider/AuthProvider";
import Register from "./pages/Login/Register";
import PrivateRoute from "./Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <PrivateRoute><Instructors/></PrivateRoute>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ],
  },
  {
    path: "/Dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
    </React.StrictMode>
);
