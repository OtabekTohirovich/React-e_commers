import React from "react";
import { Box, Container, Grid, Pagination, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getPublicProducts } from "../api";
import CardComponet from "../components/card";
import ProductContext from "../context/product-context";
import { ToastContainer } from "react-toastify";

import "../App.css";
import CardEdit from "../components/cardedit";
const PublicProducts = () => {
  const { items } = useContext(ProductContext);
  return (
    <Box >
      <Container fixed maxWidth={"1550px"}>
        <Grid container spacing={2} >
          {items?.data?.map((item) => (
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

  return (
    <Box sx={{ marginTop: {xs: 2, sm: 4, lg: 4, xl: 5}}}>
        <Container fixed maxWidth={"1550px"}>
          <Grid container spacing={2}  height={"82vh"}>
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
        <div>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      </Container>
    </Box>
  );
};

const EditProducts = () => {
  const { items } = useContext(ProductContext);

  return (
    <Box sx={{ marginTop: {xs: 2, sm: 4, lg: 4, xl: 5}}}>
        <Container fixed maxWidth={"1550px"}>
          <Grid container spacing={2}  height={"82vh"}>
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
        <div>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      </Container>
    </Box>
  );
};

export { PublicProducts, Products, EditProducts };
