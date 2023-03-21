import React, { useState } from "react";
import { Button, Container, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import { Form, FormWreapper, Input, Label } from "./style";
import { signInRequest } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signin = ({ handleAuth }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const notify = () =>
    toast.success("🦄 Successfuly Login!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formHandaler = (e) => {
    e.preventDefault();
    try {
      signInRequest(user).then(({ data }) => {
        if (data.success === true) {
          console.log(data);
          // localStorage.setItem("cardId", createCart.payload._id);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.payload));
          notify();
          handleAuth(data.token);
          // navigate("/products");
        }
      });
    } catch (error) {}
  };

  const { email, password } = user;
  return (
    <Container fixed>
      <Typography
        sx={{
          p: { xs: "10px", sm: "35px" },
          display: "grid",
          justifyContent: "center",
        }}
        variant="h2"
      >
        Log in
      </Typography>
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
      <FormWreapper>
        <Form onSubmit={formHandaler}>
          <Label >
            Email:  
            <Input
              onChange={inputHandler}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              required
              style={{marginLeft: '10px'}}
            />
          </Label>
          <Label>
            Password: 
            <Input
              onChange={inputHandler}
              type="password"
              name="password"
              placeholder="password"
              value={password}
              required
              style={{marginLeft: '10px'}}
            />
          </Label>
          <Button type="submit">Sign in</Button>
        </Form>
      </FormWreapper>
    </Container>
  );
};

export default Signin;
