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
import AddClasses from "./pages/AddClasses/AddClasses";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MyClasses from "./pages/Dashboard/MyClasses";
import SelectedClasses from "./pages/Dashboard/SelectedClasses";
import InstructorRequest from "./pages/InstructorRequest/InstructorRequest";
import Requests from "./pages/Dashboard/Requests";
import AllUsers from "./pages/Dashboard/AllUsers";
import InstructorRoute from "./Routes/InstructorRoute";
import AdminRoute from "./Routes/AdminRoute";
import ClassAddReq from "./pages/Dashboard/ClassAddReq";
import Payment from "./pages/Dashboard/Payment/Payment";
import PaymentHistory from "./pages/Dashboard/PaymentHistory";
import AllPayments from "./pages/Dashboard/AllPayments";

const queryClient = new QueryClient()
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
        element: <Instructors/>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path:"instructorreq",
        element:<PrivateRoute><InstructorRequest></InstructorRequest></PrivateRoute>
      },
      {
        path:"/addclasses",
        element:<InstructorRoute><AddClasses></AddClasses></InstructorRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'myclasses',
        element:<MyClasses></MyClasses>
      },
      {
        path:'selectedclasses',
        element:<SelectedClasses></SelectedClasses>
      },
      {
        path:"requests",
        element:<AdminRoute><Requests/></AdminRoute>
      },
      {
        path:"allUsers",
        element:<AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path:'classaddreq',
        element:<ClassAddReq></ClassAddReq>
      },
      {
        path:'payment',
        element:<Payment/>
      },
      {
        path:'history',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'allpayments',
        element:<AdminRoute><AllPayments/></AdminRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </AuthProvider>
    </React.StrictMode>
);
