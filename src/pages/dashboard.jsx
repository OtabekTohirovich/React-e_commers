import React from "react";
import Carusel from "../components/carusel";
import { PublicProducts } from "./products";

const Dashboard = ({data}) => {
  
  return (
    <div>
      <Carusel data={data} />

      <PublicProducts />
    </div>
  );
};

export default Dashboard;
