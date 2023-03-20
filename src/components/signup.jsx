import { Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { tokens } from "./theme";
import { Link } from "react-router-dom";
import { Option } from "antd/es/mentions";

const Signup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        Sign up Now
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
          name="username"
          label={<label style={{ color: `${colors.gray[100]}` }}>Username</label>}
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: `${colors.gray[100]}` }}>Email</label>}
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label={<label style={{ color: `${colors.gray[100]}` }}>Password</label>}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label={<label style={{ color: `${colors.gray[100]}` }}>Confirm Password</label>}
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
        name="phone"
        label={<label style={{ color: `${colors.gray[100]}` }}>Phone Number</label>}
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input type="number"style={{ width: '100%' }} />
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
            Sign Up
          </Button>

          <Link to={"/sign-in"} style={{ color: `${colors.gray[100]}` }}>
            {" "}
            Or Sign In now!
          </Link>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Signup;
