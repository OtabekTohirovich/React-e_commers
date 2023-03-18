import React from "react";
import { Carousel } from "antd";
import { Container, useTheme } from "@mui/material";
import {  tokens } from "./theme";

const Carusel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const contentStyle = {
    height: "450px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: `${colors.gray[900]}`,
  };
  return (
    <Container fixed>
        <Carousel autoplay style={{margin: "40px 0"}}>
          <div>
            <h3 style={contentStyle}>1</h3>
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
    </Container>
  );
};

export default Carusel;
