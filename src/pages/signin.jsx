import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { tokens } from "../components/theme";
import { signInRequest } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
import { Container, Typography, useTheme } from "@mui/material";
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
          navigate("/");
        }
      });
    } catch (error) {}
  };

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
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 900 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onSubmitCapture={formHandaler}
      >
        <Form.Item
          label={<label style={{ color: `${colors.gray[100]}` }}>Email</label>}
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input name="email" value={user.email} onChange={inputHandler}/>
        </Form.Item>

        <Form.Item
          label={<label style={{ color: `${colors.gray[100]}` }}>Password</label>}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password name="password" value={user.password} onChange={inputHandler} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox style={{ color: `${colors.gray[100]}` }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} getValueProps={user}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Signin;
