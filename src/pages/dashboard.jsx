import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardComponet from "../components/card";
import Carusel from "../components/carusel";

const Dashboard = ({data}) => {
  
  return (
    <div>
      <Carusel data={data} />

      <Container fixed maxWidth={"1550px"}>
        <Grid container spacing={1}  gap={0}>
          {data?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
              <CardComponet {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
