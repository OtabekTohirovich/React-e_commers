import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  ButtonGroup,
  CardActions,
  IconButton,
  Modal,
  useTheme,
} from "@mui/material";
import { tokens } from "./theme";
import "../App.css";
import { Add, HighlightOff, LocalMall, Remove } from "@mui/icons-material";

const CardComponet = ({ name, _id, img, salePrice, quantity }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  return (
    <Card
      sx={{
        background: `${theme.palette.mode === "dark" ? "#2d3748" : ""}`,
        maxWidth: 270,
        padding: 1,
      }}
      data-id={_id}
      className="card"
    >
      <CardMedia
        component="img"
        sx={{ borderRadius: 1 }}
        height="200"
        image={img}
        alt="green iguana"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h4" component="div">
          {name ? name : "Product"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {salePrice}
        </Typography>

       
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
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
              <div style={{ display: "flex"  , justifyContent: 'space-between', marginTop: "20px"}}>
                <div
                  style={{
                    display: "flex",
                    border: `1px solid ${colors.gray[600]}`,
                    width: "110px",
                    borderRadius: "8px",
                  }}
                >
                  <IconButton>
                    <Remove />
                  </IconButton>
                  <Typography
                    fontWeight={"bold"}
                    variant={"h4"}
                    sx={{ p: "6px 13px", color: `${colors.gray[500]}` }}
                  >
                    1
                  </Typography>
                  <IconButton>
                    <Add />
                  </IconButton>
                </div>
                <div>
                  <Typography variant="h3">{salePrice} <sub style={{fontSize: '15px'}}>UZS</sub></Typography>
                </div>
              </div>
              <Typography variant="h5" p={3}> In stock: <span style={{fontWeight: 'bold'}}>{quantity}</span></Typography>

              <Button
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
        <Button
          onClick={handleOpen}
          variant={`${
            theme.palette.mode === "dark" ? "contained" : "outlined"
          }`}
          size="small"
          color="secondary"
          sx={{ textTransform: "capitalize" }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponet;
