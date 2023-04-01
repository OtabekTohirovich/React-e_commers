import { Add, CancelPresentation, Remove } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContex, tokens } from "../components/theme";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart-context";
import { RemoveCart, addProductToCart } from "../api";

const Cart = ({ item }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContex);
  const { items, addToCart } = useContext(CartContext);
  const cardId = JSON.parse(localStorage.getItem("userId"));



  const handleAddCart = () =>{
    addProductToCart( cardId, {
      product: `${item?.product?._id}`,
      qty: 1,
      total: 1 * item?.product?.salePrice,
    }).then((data)=>{
      addToCart(data?.data?.payload?.items)
    })
  }

  const removeHander = () => {
    const filteredItems = items.filter((data) => {
      return data?.product?._id !== item?.product?._id;
    });
    RemoveCart(cardId, filteredItems)
      .then((data) => addToCart(data.payload.items))
      .catch((err) => console.log(err));
  };
  console.log(item?.qty);
  return (
    <Box>
      <Grid container spacing={1} marginBottom={1} alignItems={"center"}>
        <Grid item xs={2}>
          <Avatar
            alt="product_img"
            src={item?.product?.img}
            sx={{ width: 50, height: 50 }}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography>{item?.product?.name.slice(0, 10)}</Typography>
        </Grid>
        <Grid item xs={4} marginTop={0.5}>
          <ButtonGroup
            color="secondary"
            variant="outlined"
            size="small"
            aria-label="outlined button group"
          >
            <Button >
              <Remove />
            </Button>
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                color: `${colors.greenAccend[400]}`,
              }}
            >
              {item?.qty}
            </Button>
            <Button onClick={handleAddCart}>
              <Add />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={2}>
          {item?.total} $
        </Grid>
        <Grid item xs={1} marginTop={1} sx={{cursor: 'pointer'}}>
          <div onClick={removeHander}>
            <CancelPresentation />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
