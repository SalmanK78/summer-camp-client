import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import Card from "../shared/Card";
import axios from "axios";

const Classes = () => {
  const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/popular')
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])
  return (
    <div>
        <Header>Classes</Header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center mt-20">
        {data.map((d) => (<Card
         key={d.name} 
         data={d}>
         </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;
