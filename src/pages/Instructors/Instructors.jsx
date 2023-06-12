import React from "react";
import Header from "../shared/Header";
import dataLoader from "../../hooks/dataLoader";

const Instructors = () => {
  const [users] = dataLoader("instructors");
  console.log(users);
  return (
    <div>
      <Header>Instructors</Header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center mt-20">
        {users?.map((user) => (
          <div key={user._id} className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src={user.image}
                alt="Shoes"
              />
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

export default Instructors;
