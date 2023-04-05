import React, { useContext } from "react";
import EditCardComponet from "../components/cardedit";
import { Container, Grid } from "@mui/material";
import ProductContext from "../context/product-context";

const MainPage = () => {
  const { items } = useContext(ProductContext);

  return (
    <Container fixed maxWidth={"1550px"}>
      <Grid container spacing={2} gap={0} height={"82vh"}>
        {items?.data?.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
              <EditCardComponet {...item} data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MainPage;
