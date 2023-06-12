import axios from 'axios';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import dataLoader from '../../hooks/dataLoader';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const Card = ({data,admin}) => {
    const {user} = useAuth();
    const [s,refetchClasses] = dataLoader('classes')

    const handleSelect=(item)=>{
      if(user){
        axios.post(`http://localhost:5000/selected`,{item,email:user.email})
      }
    }
    const handleEnroll=(id)=>{
      axios.patch(`http://localhost:5000/classes/${id}`)
      .then(data=>{
        console.log(data)
        refetchClasses()
      })
    }
    const handleAccpet=(data)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be Accept the request",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        console.log(data._id)
        if (result.isConfirmed) {
          axios.post(`http://localhost:5000/accptedclasses`,{data,id:data._id})
          .then(res =>{
              refetchRequest()
              Swal.fire(
                'Success!',
                'Request Accepted',
                'success'
              )
          })
        }
      })
          
    }
    const handleDelete=(id)=>{

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be Delete the Request",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(id)
          axios.delete(`http://localhost:5000/accptedclasses/${id}`)
          .then(res =>{
              refetchRequest()
              Swal.fire(
                'Deleted!',
                'Reaquest Deleted',
                'success'
              )
          })
        }
        })
      }
      const zeroSeats = data.seats-data?.enroll === 0
    return (
        <>
            <div key={data.name}>
            <div className="flex flex-wrap place-items-center">
              <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg h-90 w-80">
                  <img
                    alt="blog photo"
                    src={data.image}
                    className="max-h-40 w-full object-cover"
                  />
                  <div className="bg-white w-full p-4">
                    <p className="text-indigo-500 text-2xl font-medium">
                      {data.name}
                    </p>
                        
                    <div className="mt-2 border-t-2 pt-2">
                    <p className="font-bold text-lg">Available Seats: {data?.enroll ? data.seats-data?.enroll:data.seats}</p>
                    <p className="font-bold text-lg">Price: <span className="text-red-500">${data.price}</span></p>
                    </div>

                    <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-sm text-white font-medium">
                      
                      {!admin &&
                        <div>
                          <button onClick={()=>handleSelect(data)} className=" m-1 px-2 py-1 rounded bg-indigo-500">
                            Select
                          </button>
                          <button disabled={zeroSeats} onClick={()=>handleEnroll(data._id)} className="m-1 px-2 py-1 rounded bg-indigo-500">
                            Enroll
                          </button>
                        </div>
                      }
                      {admin &&
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
                      }
                    </div>
                    <div className="flex items-center mt-2">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt="User avatar"
                        src={data.instructor_img}
                      />

                      <div className="pl-3">
                        <div className="font-medium">{data.instructor}</div>
                        <div className="text-gray-600 text-sm">
                          
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default Card;