import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { Add, HighlightOff, LocalMall, Remove } from "@mui/icons-material";
import { tokens } from "./theme";
import { addProductToCart } from "../api";
import CartContext from "../context/cart-context";
import { toast } from "react-toastify";

const ModalWreapper = ({
  _id,
  open,
  img,
  salePrice,
  handleClose,
  quantity,
  name,
  qty,
  setQty
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const { items, addToCart } = useContext(CartContext);
  // console.log(items);

  if(qty < 1){
    setQty(1)
  }
  if(qty >= quantity){
    setQty(quantity)
  }
  const notify = () =>
    toast.success(`🦄 Successfuly Add to cart!`, {
      position: "top-right",
      autoClose: 5000,
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
    width: "900px",
    height: "400px",
    bgcolor: "background.paper",
    boxShadow: 24,
    border: `1px solid ${colors.gray[300]}`,
    background: `${colors.gray[300]}`,
    borderRadius: "10px",
    display: "flex",
  };
  const handleAddCart = () =>{
    console.log("hello");
    addProductToCart( userId, {
      product: `${_id}`,
      qty: qty,
      total: qty * salePrice,
    }).then((data)=>{
      addToCart(data?.data?.payload?.items)
      // console.log(data);
      // console.log(items);
      notify()
      handleClose()
    })
  }


  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      
      <Box sx={style}>
        <Box
          width={"50%"}
          sx={{
            borderRight: `1px solid ${colors.gray[800]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img width={"70%"} src={img} alt="Product-img" />
        </Box>
        <Box
          width={"50%"}
          sx={{
            padding: "40px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" fontWeight={"bold"}>
            {name ? name : "Product"}
          </Typography>
          <Typography pt={3} variant="h4" component="div">
            Sizga ko'rsatilgan maxsulot bir dona uchun belgilangan
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                border: `1px solid ${colors.gray[600]}`,
                width: "110px",
                borderRadius: "8px",
              }}
            >
              <IconButton onClick={() => {
                  setQty((qty -= 1 ));
                }}>
                <Remove />
              </IconButton>
              <Typography
                fontWeight={"bold"}
                variant={"h4"}
                sx={{ p: "6px 13px", color: `${colors.gray[500]}` }}
              >
                {qty}
              </Typography>
              <IconButton
                onClick={() => {
                  setQty((qty += 1));
                }}
              >
                <Add />
              </IconButton>
            </div>
            <div>
              <Typography variant="h3">
                {salePrice * qty} <sub style={{ fontSize: "15px" }}>UZS</sub>
              </Typography>
            </div>
          </div>
          <Typography variant="h5" p={3}>
            In stock: <span style={{ fontWeight: "bold" }}>{quantity - qty}</span>
          </Typography>

          <Button
            onClick={handleAddCart}
            size="large"
            variant={`${
              theme.palette.mode === "dark" ? "contained" : "outlined"
            }`}
            color="secondary"
            sx={{ textTransform: "capitalize" }}
          >
            Add to <LocalMall />
          </Button>
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
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalWreapper;
