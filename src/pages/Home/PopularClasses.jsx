import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import axios from "axios";
import SectionTitle from "../shared/SectionTitle";

const PopularClasses = () => {
    const [data,setData] = useState([])
        axios.get('http://localhost:5000/popular')
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })

  return (
    <div className="mt-20">
        <SectionTitle des={"Summer camp is a program for children or teens during summer months in many countries. Children and adolescents are called campers."} head={"Popular Classes"}></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center mt-20">
        {data.slice(0,6).map((d) => (
          <Card key={d.name} data={d}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
