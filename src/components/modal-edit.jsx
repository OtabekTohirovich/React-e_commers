import React, { useContext, useState } from "react";
import { Box, IconButton, Modal, Typography, useTheme } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import { tokens } from "./theme";
import { addProductToCart } from "../api";
import CartContext from "../context/cart-context";
import { toast } from "react-toastify";
import { ChangeEvent } from "react";

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
  price,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const { addToCart } = useContext(CartContext);
  const [file, setFile] = useState();
  const [salePrices, setSalePrices] = useState(salePrice);
  const [sale, setSale] = useState(salePrice);
  const [quantitys, setQuantity] = useState(quantity);
  const [title, setTitle] = useState(name);
  const [state,  setState] = useState({name: '', viewers: ''})

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
  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    console.log(e.target.files[0]);
  };

  const changeHandler = e =>{
    setState({ ...state, [e.target.name]: e.target.value })

  }
  const addformhandler = e =>{
    e.preventDefault()
    // const data = { name: state.name, viewers: state.viewers }
    console.log(state);
    // setState({ name: '', viewers: '' })
  }

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

          <form onSubmit={addformhandler}>
            <div>
              <input type="file" name="img"  onChange={handleFileChange} />

              <div>{file && `${file.name} - ${file.type}`}</div>
            </div>

            <div>
              <label>Product name:</label>
              <input
                type="text"
                value={title}
                onChange={changeHandler}
                name="name"
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                value={sale}
                onChange={changeHandler}
                name="salePrice"
              />
            </div>
              <input
                type="number"
                placeholder="Nechi marotaba Ko'rilgan ?"
                onChange={changeHandler}
                name="viewers"
                value={sale}
              />
              <button type="submit">
                Qo'shish
              </button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalWreapperedit;
