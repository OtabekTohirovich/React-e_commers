import { Box, Container, Grid } from "@mui/material";
import CardComponet from "../components/card";

const PublicProducts = ({ data }) => {
  return (
    <Box sx={{marginTop: '40px'}}>
      <Container fixed maxWidth={"1550px"}>
        <Grid container spacing={1} gap={0}>
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

export default PublicProducts;
