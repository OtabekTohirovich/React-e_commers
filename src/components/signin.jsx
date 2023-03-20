import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Container, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import { Link } from "react-router-dom";

const Signin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //   const onFinish = (values: any) => {
  //     console.log("Success:", values);
  //   };

  //   const onFinishFailed = (errorInfo: any) => {
  //     console.log("Failed:", errorInfo);
  //   };
  return (
    <Container fixed>
      <Typography
        sx={{ p: {xs: "10px" , sm: '35px'}, display: "grid", justifyContent: "center" }}
        variant="h2"
      >
        Log in
      </Typography>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 900 }}
          initialValues={{ remember: true }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={
              <label style={{ color: `${colors.gray[100]}` }}>Email</label>
            }
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={
              <label style={{ color: `${colors.gray[100]}` }}>Password</label>
            }
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox style={{ color: `${colors.gray[100]}` }}>
              Remember me
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>

            <Link to={"/sign-up"} style={{ color: `${colors.gray[100]}` }}>
              {" "}
              Or register now!
            </Link>
          </Form.Item>
        </Form>
    </Container>
  );
};

export default Signin;
