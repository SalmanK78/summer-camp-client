import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../shared/Header";

const Classes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
        <Header>Classes</Header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center mt-20">
        {data.map((d) => (
          <div key={d.name}>
            <div className="flex flex-wrap place-items-center">
              <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg h-90 w-80">
                  <img
                    alt="blog photo"
                    src={d.image}
                    className="max-h-40 w-full object-cover"
                  />
                  <div className="bg-white w-full p-4">
                    <p className="text-indigo-500 text-2xl font-medium">
                      {d.name}
                    </p>
                        
                    <div className="mt-2 border-t-2 pt-2">
                    <p className="line-clamp-2 mb-4">{d.description}</p>
                    <p className="font-bold text-lg">Available Seats: {d.seats}</p>
                    <p className="font-bold text-lg">Price: <span className="text-red-500">${d.price}</span></p>
                    </div>

                    <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-sm text-white font-medium">
                      
                      <button className=" m-1 px-2 py-1 rounded bg-indigo-500">
                        Select
                      </button>
                      <button className="m-1 px-2 py-1 rounded bg-indigo-500">
                        Enrolle
                      </button>
                    </div>
                    <div className="flex items-center mt-2">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt="User avatar"
                        src={d.instructor_img}
                      />

                      <div className="pl-3">
                        <div className="font-medium">{d.instructor}</div>
                        <div className="text-gray-600 text-sm">
                          
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
