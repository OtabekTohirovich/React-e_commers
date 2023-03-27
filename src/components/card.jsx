import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActions,
  IconButton,
  Modal,
  useTheme,
} from "@mui/material";
import { tokens } from "./theme";
import "../App.css";
import { HighlightOff, LocalMall } from "@mui/icons-material";

const CardComponet = ({ name, _id, img, salePrice }) => {
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
                <Typography variant="h4" component="div">
                  Sizga ko'rsatilgan maxsulot bir dona uchun belgilangan
                </Typography>
                <Button
                  size="medium"
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
        </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
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
