import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, IconButton, useTheme } from "@mui/material";
import { tokens } from "./theme";
import "../App.css";
import { DeleteForever, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ModalWreapperedit from "./modal-edit";

const EditCardComponet = ({ name, _id, img, salePrice, quantity }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const user = JSON.parse(localStorage.getItem("user"));
  let [qty, setQty] = React.useState(1);
  const token = localStorage.getItem("token");
  const handleClose = () => {
    setOpen(false);
    setQty(1);
  };

  return (
    <Card
      sx={{
        background: `${theme.palette.mode === "dark" ? "#2d3748" : ""}`,
        maxWidth: 270,
        padding: 1.5,
        marginBottom: 1,
      }}
      className="card"
    >
      {token ? (
        <ModalWreapperedit
          _id={_id}
          open={open}
          name={name}
          img={img}
          salePrice={salePrice}
          handleClose={handleClose}
          quantity={quantity}
          qty={qty}
          setQty={setQty}
        />
      ) : (
        ""
      )}
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
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={handleOpen} sx={{border:" 1px solid"}}>
            <Edit />
          </IconButton>
          <IconButton sx={{border:" 1px solid"}}>
            <DeleteForever />
          </IconButton>
      </CardActions>
    </Card>
  );
};

export default EditCardComponet;
