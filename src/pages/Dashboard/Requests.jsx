import React from "react";
import dataLoader from "../../hooks/dataLoader";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Requests = () => {
  const { user } = useAuth();
  const [loadedData, refetch] = dataLoader(`requests`);
  console.log(loadedData);
  const handleAccpet=(data)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be make the user Instructor",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`http://localhost:5000/accpted`,{data})
        .then(res =>{
            refetch()
            Swal.fire(
              'Deleted!',
              'Usre Make Instructor success',
              'success'
            )
        })
      }
    })
        
  }
  const handleDelete=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be Delete the user",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/requests${id}`)
        .then(res =>{
            refetch()
            Swal.fire(
              'Deleted!',
              'User has been deleted.',
              'success'
            )
        })
      }
    })
    
  }

  return (
      <div className="border w-full">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loadedData?.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={data.image || 'https://img.freepik.com/free-icon/user_318-159711.jpg'}
                            alt="Avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{data.name}</div>
                  </td>
                  <td className="font-bold">
                    {data.email}
                  </td>

                  <td>
                    <div className=" flex items-start gap-5">
                      <button onClick={()=>handleAccpet(data)} className="text-green-500 text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>

                      </button>
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="text-red-500"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Requests;
