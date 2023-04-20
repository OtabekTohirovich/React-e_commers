import { Box, CardContent, CardMedia, Stack, useTheme } from "@mui/material";
import { tokens } from "./theme";

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
          image={item?.img}
          alt="Paella dish"
          sx={{ objectFit: "cover" }}
        />
      </CardContent>
    </Stack>
  );
};

export default CaruselDetails;
