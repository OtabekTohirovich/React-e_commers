import React, { useContext, useState } from "react";
import {
  Box,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { HighlightOff} from "@mui/icons-material";
import { tokens } from "./theme";
import { addProductToCart } from "../api";
import CartContext from "../context/cart-context";
import { toast } from "react-toastify";
import { Button, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ModalWreapperedit = ({
  _id,
  open,
  img,
  salePrice,
  handleClose,
  quantity,
  name,
  qty,
  setQty,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const { addToCart } = useContext(CartContext);

  if (qty < 1) {
    setQty(1);
  }
  if (qty >= quantity) {
    setQty(quantity);
  }
  const notify = () =>
    toast.success(`🦄 Successfuly Add to cart!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "400px",
    bgcolor: "background.paper",
    boxShadow: 24,
    border: `1px solid ${colors.gray[300]}`,
    background: `${colors.gray[300]}`,
    borderRadius: "10px",
    display: "flex",
  };
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          width={"100%"}
          sx={{
            padding: "40px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" fontWeight={"bold"}>
            Edit Product
          </Typography>

          <IconButton
            onClick={handleClose}
            sx={{
              color: ` ${colors.gray[100]}`,
              position: "absolute",
              top: "15px",
              right: "15px",
            }}
          >
            <HighlightOff />
          </IconButton>

          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              "input-number": 3,
              "checkbox-group": ["A", "B"],
              rate: 3.5,
            }}
            style={{ maxWidth: 600 }}
          >
            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalWreapperedit;
