import React from "react";
import { Carousel } from "antd";
import { Container, Paper, useTheme } from "@mui/material";
import { tokens } from "./theme";

const Carusel = ({ data }) => {
  // const datalingth = data;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const contentStyle = {
    height: "450px",
    color: `${colors.gray[100]}`,
    lineHeight: "160px",
    textAlign: "center",
    background: `${colors.gray[900]}`,
  };
  return (
    <Container fixed>
      <Paper variant="outlined" square sx={{ margin: "40px 0" }}>
        <Carousel autoplay>
          <div>
           
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Paper>
    </Container>
  );
};

export default Carusel;
