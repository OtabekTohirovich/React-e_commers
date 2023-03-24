import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, useTheme } from "@mui/material";
import { tokens } from "./theme";
import "../App.css";

const CardComponet = ({ name, _id, img, salePrice }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
      <CardActionArea>
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
            alignItems: 'center'
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            {name ? name : "Product"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {salePrice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button  variant={`${theme.palette.mode === "dark" ? "contained" : "outlined"}`} size="small" color="secondary" sx={{textTransform:'capitalize'}}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponet;
