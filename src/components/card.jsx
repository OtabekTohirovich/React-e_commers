import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, useTheme } from "@mui/material";
import { tokens } from "./theme";

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

          <Button
            variant={`${
              theme.palette.mode === "dark" ? "contained" : "outlined"
            }`}
            sx={{
              background: `${theme.palette.mode === "dark" ? "#f96435" : ""}`,
              maxWidth: "150px",
              textTransform:'capitalize'
            }}
          >
            Add to cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponet;
