import React from "react";
import dataLoader from "../../hooks/dataLoader";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, refetch] = dataLoader("users");
  console.log(users);
  const handleDelete = (user) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be Delete the user",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/users/${user?.email}`).then((res) => {
                console.log(res);
                if (res.data.deletedCount > 0) {
                  refetch();
                  Swal.fire(
                    'Deleted!',
                    'User has been deleted.',
                    'success'
                  )
                }
              });
        }
      });
        
  };
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be make the user Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/isadmin/${user._id}`).then((res) => {
          refetch();
          Swal.fire(
            'Success!',
            'Usre Make Admin success',
            'success'
          )
        });
      }
    });
  };
  return (
    <div className="border w-full ml-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Promoted</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={
                          user.image ||
                          "https://img.freepik.com/free-icon/user_318-159711.jpg"
                        }
                        alt="Avatar"
                      />
                    </div>
                  </div>
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role || "User"}</td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost bg-orange-600  text-white"
                  >
                    <FaUserShield></FaUserShield>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
