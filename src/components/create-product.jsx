import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton, Modal, Typography, useTheme } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import {
  Form,
  Img,
  ImgWrapper,
  InputFile,
  InputItem,
  Label,
  LabelFile,
  Select,
  UploadImg,
} from "./style";
import fileUpload from "./fileupload";
import InputField from "./input-feild";
import { Textarea } from "./styles-input";
import { tokens } from "./theme";
import { createNewProduct, getCategorys } from "../api";
import ProductContext from "../context/product-context";
// import ProductContext from "../context/product-context";
const CreateProduct = ({ open, handleClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [product, setProduct] = useState({
    name: "",
    price: null,
    salePrice: null,
    categoryId: "",
    description: "",
  });
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getCategorys()
      .then((data) => {
        setCategorys(data?.data?.payload);
      })
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "600px",
    bgcolor: "background.paper",
    boxShadow: 24,
    border: `1px solid ${colors.gray[300]}`,
    background: `${colors.gray[300]}`,
    borderRadius: "10px",
    display: "flex",
  };
  const { changeData } = useContext(ProductContext);
  //   console.log(items);

  const formHandler = (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      formData.append("img", e.target.img.files[0]);
      createNewProduct(formData).then((data) => {
        console.log(data);
        changeData(data.data.payload);
        handleClose();
      });
    } catch (error) {
      console.log(error);
    }
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
            Create Product
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
          <Form onSubmit={formHandler}>
            <UploadImg>
              <ImgWrapper>
                <Img id="productimg" src="" alt="" />
              </ImgWrapper>
              <div>
                <InputFile
                  type="file"
                  id="product_img_input"
                  name="img"
                  accept="image/*"
                  onChange={(e) => fileUpload(e)}
                />
                <LabelFile
                  style={{
                    border: `1px solid ${colors.redAccend[400]}`,
                    borderRadius: "5px",
                    background: `${colors.redAccend[400]}`,
                    color: "#fff",
                    padding: " 7px 15px",
                    cursor: "pointer",
                  }}
                  className="btn btn-orange"
                  htmlFor="product_img_input"
                >
                  Upload image
                </LabelFile>
              </div>
            </UploadImg>
            <Box>
              <InputField
                title="Name"
                name="name"
                inputType="text"
                onChange={inputHandler}
              />
              <InputField
                title="Price"
                name="price"
                inputType="number"
                onChange={inputHandler}
              />
              <InputField
                title="SalePrice"
                name="salePrice"
                inputType="number"
                onChange={inputHandler}
              />
              <InputItem>
                <Label> Category</Label>
                <Select name="categoryId" onChange={inputHandler}>
                  {categorys?.map((e) => {
                    return (
                      <option key={e._id} value={e._id}>
                        {e.name}
                      </option>
                    );
                  })}
                </Select>
              </InputItem>
              <InputItem>
                <Label>Description</Label>
                <Textarea
                  name="description"
                  onChange={inputHandler}
                  id=""
                ></Textarea>
              </InputItem>
              <div>
                <button
                  type="submit"
                  style={{
                    marginLeft: "35%",
                    borderRadius: "5px",
                    background: `${colors.redAccend[400]}`,
                    color: "#fff",
                    padding: " 7px 20px",
                    border: `1px solid ${colors.redAccend[400]}`,
                    cursor: "pointer",
                  }}
                >
                  Create
                </button>
              </div>
            </Box>
          </Form>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateProduct;
