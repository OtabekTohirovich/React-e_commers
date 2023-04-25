import { Box, CardContent, CardMedia, Stack, useTheme } from "@mui/material";
import { tokens } from "./theme";
import image from "../assets/maxsulot.jpg";


const CaruselDetails = ({ item }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const contentStyle = {
    height: "450px",
    color: `${colors.gray[100]}`,
    background: `${colors.gray[900]}`,
  };
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%"
  };
  return (
    <Stack sx={contentStyle} direction={"row"}>
      <Box sx={style}>{item?.name}</Box>
      <CardContent sx={style}>
        <CardMedia
          component="img"
          height="300px"
          width={"300px"}
          image={item?.img ? item?.img : image}
          alt="Paella dish"
          sx={{ objectFit: "cover", border: '1px solid',  borderRadius: '10px' }}
        />
      </CardContent>
    </Stack>
  );
};

export default CaruselDetails;
