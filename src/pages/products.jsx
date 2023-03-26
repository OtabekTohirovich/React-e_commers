import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts } from "../api";
import CardComponet from "../components/card";

const PublicProducts = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getProducts().then((data) => {
      setData(data.data.data);
    });
  },[]);
  return (
    <Box sx={{marginTop: '40px'}}>
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
  const [data, setData] = useState();
  useEffect(() => {
    getProducts().then((data) => {
      setData(data.data.data);
    });
  },[]);
  return (
    <Box sx={{marginTop: '40px'}}>
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
  )
}


export {PublicProducts , Products};
