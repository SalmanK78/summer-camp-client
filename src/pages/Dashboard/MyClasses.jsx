import React from "react";
import dataLoader from "../../hooks/dataLoader";
import { useAuth } from "../../hooks/useAuth";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const MyClasses = () => {
  const { user } = useAuth();
  const [loadedData, refetch] = dataLoader(`addedclasses?email=${user?.email}`)
  const handleDelete = (id)=>{
    console.log(id)
     
}
  return (
    <div className="border w-full ml-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadedData?.map((data,index) => 
              <tr key={data._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-red-600">${data.price}</span>
                </td>
                <td>{data.seats}</td>
                <td>
                  <div className=" flex items-start gap-5">
                    <button onClick={()=>handleDelete(data._id)} className="text-red-500 text-xl"><FaTrashAlt></FaTrashAlt></button>
                    <button className="text-amber-500 text-xl"><FaEdit></FaEdit></button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
