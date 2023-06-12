import React, { useState } from "react";
import Header from "../shared/Header";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const InstructorRequest = () => {
    const { user } = useAuth();
    const [pending,setPending] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  axios.get(`http://localhost:5000/pending/${user.email}`)
  .then(res =>setPending(res.data.status))
  const onSubmit = (data) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Send To Admin",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const reqInfo =  {name:data.name,image:data.instructor_img,email:user?.email}
            axios.post('http://localhost:5000/requests', {reqInfo})
                .then(data =>{
                    reset()
                    Swal.fire(
                      'Success!',
                      'Request Send Success',
                      'success'
                    )
                })
      }
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
            disabled={pending === 'pending'}
            value={`${pending === 'pending' ? 'Request Pending':'Send To Admmin'}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default InstructorRequest;
