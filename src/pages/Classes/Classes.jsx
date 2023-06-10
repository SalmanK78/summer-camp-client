import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import Card from "../shared/Card";

import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import dataLoader from "../../hooks/dataLoader";

const Classes = () => {
  const {user}=useAuth()
  // const [selected] = dataLoader(`selected?eamil=${user?.email}`);
  // console.log(selected)
  const [loadedData] = dataLoader('classes')
  return (
    <div>
        <Header>Classes</Header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 justify-items-center mt-20">
        {loadedData?.map((d) => (<Card
         key={d.name} 
         data={d}>
         </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;
