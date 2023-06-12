import React, { useEffect, useState } from 'react';
import dataLoader from '../../hooks/dataLoader';
import Card from '../shared/Card';
import axios from 'axios';

const ClassAddReq = () => {
    const [data,setData] = useState([])
    console.log(data)
    useEffect(()=>{
        axios.get('http://localhost:5000/classrequests')
        .then(res=>{
            setData(res.data)
        })
    },[])
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center mt-20">
        {data.map((d) => (<Card
         key={d.name} 
         admin={true}
         data={d}>
         </Card>
        ))}
      </div>
        </div>
    );
};

export default ClassAddReq;