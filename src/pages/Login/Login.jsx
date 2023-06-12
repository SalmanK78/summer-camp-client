import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [error,setError] = useState('')

    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{

       signIn(data.email,data.password)
       .then(res=>{
        axios.post('http://localhost:5000/users',{name:data.name,email:data.email})
        .then(data=>{
          console.log(data)
        })
        Swal.fire({
            title: 'User Login Successful.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        navigate(from, { replace: true });
       })
       .catch(error=>{
        setError(error.message)
       })
    };
    // console.log(watch("example"));
  return (
    <div>
      <div className="max-w-md md:px-20 m-auto py-5 px-5 mt-20">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Please Login !!!
          </h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              {...register("name")}
              id=""
              placeholder="Username"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
              {...register("email")}
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              {...register("password")}
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-lg text-white font-semibold mb-2"
          >
            Login
          </button>
          <h1 className="font-semibold  text-center my-2">OR</h1>
          <SocialLogin></SocialLogin>
          {error && <p className="text-red-500">{error}</p>}
          <span className="text-sm cursor-pointer">
            <Link to="/register">
              <span>Don’t have an account yet? </span>
              <button className="btn-link  hover:text-blue-500">
                Register
              </button>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
