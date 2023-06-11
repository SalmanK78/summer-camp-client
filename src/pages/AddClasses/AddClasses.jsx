import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Header from "../shared/Header";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddClasses = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
            const addInfo =  {instructor:data.instructor,image:data.image,name:data.name,price:data.price,instructor_img:data.instructor_img,seats:data.seats,email:user?.email}
            console.log(addInfo)
            axios.post('http://localhost:5000/classes', {addInfo})
                .then(data =>{
                    reset()
                })
  };
  return (
    <>
      <Header>Add Classes</Header>
      <div className="max-w-7xl mx-auto md:px-20 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="name"
                {...register("name")}
                placeholder="Class Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="instructor"
                defaultValue={user?.displayName}
                {...register("instructor")}
                placeholder="Your Name"
                required
                disabled
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
            <div>
              <input
                type="number"
                {...register("price")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="price"
                placeholder="Class Price"
                required
              />
            </div>
            <div>
              <input
                type="number"
                {...register("seats")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="seats"
                placeholder="Available Seats"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="image"
              {...register("image")}
              placeholder="Class Image"
              required
            />
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
            value="Add Product"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          ></input>
        </form>
      </div>
    </>
  );
};

export default AddClasses;