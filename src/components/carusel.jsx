import React, { useContext } from "react";
import { Carousel } from "antd";
import { Container, Paper } from "@mui/material";
import ProductContext from "../context/product-context";
import CaruselDetails from "./carusel-details";

const Carusel = ({ data }) => {
  const { items } = useContext(ProductContext);
  return (
    <Container fixed>
      <Paper variant="outlined" square sx={{ margin: "40px 0" }}>
        <Carousel autoplay>
          <div>
            <CaruselDetails item={items?.data?.[0]}/>
          </div>
          <div>
            <CaruselDetails item={items?.data?.[1]}/>
          </div>
          <div>
            <CaruselDetails item={items?.data?.[2]}/>
          </div>
          <div>
            <CaruselDetails item={items?.data?.[3]}/>
          </div>
          <div>
            <CaruselDetails item={items?.data?.[4]}/>
          </div>
          <div>
            <CaruselDetails item={items?.data?.[5]}/>
          </div>
          <div>
            <CaruselDetails item={items?.data?.[6]}/>
          </div>
          <div>
            <CaruselDetails item={items?.data?.[7]}/>
          </div>
        </Carousel>
      </Paper>
    </Container>
  );
};

export default Carusel;
