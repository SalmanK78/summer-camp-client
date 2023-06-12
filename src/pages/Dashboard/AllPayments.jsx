import React from 'react';
import dataLoader from '../../hooks/dataLoader';
import SectionTitle from '../shared/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';

const AllPayments = () => {
    const [loadedData,refetch]= dataLoader('allpayments')
    const handleDelete = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete the history",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`http://localhost:5000/payment/${id}`)
        .then(res =>{
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
        })
            }
          })
        
    }
    return (
        <div>
            <div>
      <div className="mb-20 mt-10">
        <SectionTitle head={"Payment History"}></SectionTitle>
      </div>
      <div>
      <div className="border w-full ">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>transactionId</th>
              <th>Price</th>
              <th>Quantity</th>
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
                  {data.email}
                </td>
                    <td>
                      {data.transactionId}
                    </td>
                <td>
                  <span className="text-red-600">${data.price}</span>
                </td>
                <td>{data.quantity}</td>
                <td>
                  <div className=" flex items-start gap-5">
                    <button onClick={()=>handleDelete(data._id)} className="text-red-500 text-xl"><FaTrashAlt></FaTrashAlt></button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </div>
        </div>
    );
};

export default AllPayments;