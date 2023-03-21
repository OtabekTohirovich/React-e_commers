import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import CardComponet from "./card";
import Carusel from "./carusel";

const Dashboard = () => {
  const [data, setData] = useState()
  useEffect(() => {
    getProducts().then((data)=>{
      setData(data.data.data)
      
    })
  }, []);
  console.log(data);
  return (
    <div>
      <Carusel/>

      {data?.map((item) => (
        <CardComponet key={item?._id} {...item}/>
      ))}
    </div>
  );
};

export default Dashboard;

