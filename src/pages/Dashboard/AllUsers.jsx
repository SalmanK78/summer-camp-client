import React from 'react';
import dataLoader from '../../hooks/dataLoader';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import axios from 'axios';

const AllUsers = () => {
    const [users,refetch] = dataLoader('users')
    console.log(users)
    const handleDelete = (user)=>{
        axios.delete(`http://localhost:5000/users/${user?.email}`)
        .then(res =>{
            console.log(res)
            if(res.data.deletedCount > 0){
                refetch()
            }
        })  
    }
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th>
                                <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.image || 'https://img.freepik.com/free-icon/user_318-159711.jpg'}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                                </th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user?.role || 'User'
                                    // <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;