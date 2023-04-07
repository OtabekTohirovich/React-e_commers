import React, { useContext } from "react";
import EditCardComponet from "../components/cardedit";
import { Container, Grid } from "@mui/material";
import ProductContext from "../context/product-context";
import { EditProducts } from "./products";

const MainPage = () => {
  const { items } = useContext(ProductContext);

  return (
    <EditProducts/>
  );
};

export default MainPage;
