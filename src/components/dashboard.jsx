import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import CardComponet from "./card";
import Carusel from "./carusel";

const Dashboard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getProducts().then((data) => {
      setData(data.data.data);
    });
  }, []);
  console.log(data);
  return (
    <div>
      <Carusel />

      <Container>
        <Grid container spacing={3} >
          {data?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <CardComponet {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
