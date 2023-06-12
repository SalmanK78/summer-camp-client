import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import axios from "axios";

const PopularInstructors = () => {
  const[user,setUser]= useState([])
   useEffect(()=>{
    axios.get('http://localhost:5000/instructors')
  .then(res=>{
    setUser(res.data)
  })
   },[])
  return (
    <div>
      <div className="mt-20">
      <SectionTitle des={"Summer camp is a program for children or teens during summer months in many countries."} head="Popular Instructor"></SectionTitle>
      </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center mt-20">
          {user?.map((user) => (
            <div
              key={user._id}
              className="card card-compact w-80 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={user.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default PopularInstructors;
