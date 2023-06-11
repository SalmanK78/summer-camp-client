import axios from 'axios';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import dataLoader from '../../hooks/dataLoader';

const Card = ({data}) => {
    const {user} = useAuth();
    const [,refetch] = dataLoader('classes')
    const handleSelect=(item)=>{
      console.log(item._id)

        axios.post(`http://localhost:5000/selected`,{item,email:user.email})
    }
    const handleEnroll=(id)=>{
      axios.patch(`http://localhost:5000/classes/${id}`)
      .then(data=>{
        console.log(data)
        refetch()
      })
    }

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
                      
                      {
                        <div>
                          <button onClick={()=>handleSelect(data)} className=" m-1 px-2 py-1 rounded bg-indigo-500">
                            Select
                          </button>
                          <button disabled={data.seats-data?.enroll === 0} onClick={()=>handleEnroll(data._id)} className="m-1 px-2 py-1 rounded bg-indigo-500">
                            Enroll
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