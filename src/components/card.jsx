import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActions,
  useTheme,
} from "@mui/material";
import { tokens } from "./theme";
import "../App.css";
import { ShoppingCart } from "@mui/icons-material";
import { CardIcon } from "./style";
import { useNavigate } from "react-router-dom";
import ModalWreapper from "./modal";

const CardComponet = ({ name, _id, img, salePrice, quantity }) => {
  const theme = useTheme();
  const navigate = useNavigate()
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleClose = () => setOpen(false);


  return (
    <Card
    sx={{
      background: `${theme.palette.mode === "dark" ? "#2d3748" : ""}`,
      maxWidth: 270,
      padding: 1,
    }}
    className="card"
    >
    <ModalWreapper _id={_id} open={open} name={name} img={img} salePrice={salePrice} handleClose={handleClose} quantity={quantity}  />        
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

        {user ? (
          <button className="card-btn" style={{background: `${colors.primary[900]}`}} onClick={handleOpen}>
            <CardIcon>
              <ShoppingCart sx={{color: ` ${colors.redAccend[500]}`}} />
            </CardIcon>
          </button>
        ) : (
          <button onClick={() => navigate("/sign-in")} style={{background: `${colors.primary[900]}`}} className="card-btn">
            <CardIcon>
              <ShoppingCart sx={{color: ` ${colors.redAccend[500]}`}} />
            </CardIcon>
          </button>
        )}

        
      </CardActions>
    </Card>
  );
};

export default CardComponet;
