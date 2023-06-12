import React from "react";
import Header from "../shared/Header";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";

const InstructorRequest = () => {
    const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
            const reqInfo =  {name:data.name,image:data.instructor_img,email:user?.email}
            axios.post('http://localhost:5000/requests', {reqInfo})
                .then(data =>{
                    reset()
                })
  };
  return (
    <div>
      <Header>Instructor Request</Header>
      <div className="max-w-7xl mx-auto md:px-20 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="name"
                defaultValue={user?.displayName}
                {...register("name")}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                {...register("email")}
                defaultValue={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="seller_email"
                required
                disabled
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="instructor_img"
              {...register("instructor_img")}
              placeholder="Your Image"
              required
            />
          </div>

          <input
            type="submit"
            value="Send To Admin"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default InstructorRequest;