import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardComponet = ({name, _id, img, salePrice}) => {
  return (
      <Card sx={{ maxWidth: 245 }} data-id={_id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name ? name : "Product"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {salePrice}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default CardComponet;
