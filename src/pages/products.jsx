import React from "react";
import { Box, Container, Grid, Pagination, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getPublicProducts } from "../api";
import CardComponet from "../components/card";
import ProductContext from "../context/product-context";
import "../App.css";
const PublicProducts = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getPublicProducts().then((data) => {
      setData(data.data.data);
    });
  }, []);
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Container fixed maxWidth={"1550px"}>
        <Grid container spacing={2} gap={0}>
          {data?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
              <CardComponet {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Products = () => {
  const { items } = useContext(ProductContext);
  console.log(items);

  return (
    <Box sx={{ marginTop: "40px" }}>
        <Container fixed maxWidth={"1550px"}>
          <Grid container spacing={2} gap={0} height={"82vh"}>
            {items?.data?.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item._id}>
                  <CardComponet {...item} data={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>

      <Container fixed>
        {items?.pages?.totalPages > 1 ? <Stack spacing={2}>
          <Pagination count={items?.pages?.totalPages} />
        </Stack> : ""}
        
      </Container>
    </Box>
  );
};

export { PublicProducts, Products };
