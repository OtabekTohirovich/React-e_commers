import { CardMedia, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import logo from "../assets/logocha.svg";
import logodark from "../assets/brand.png";
import {
  LocalMall,
  Logout,
  Sell,
  SettingsPhone,
  ShoppingCart,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const DefaultSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack
      direction={"column"}
      width={"250px"}
      height={"100vh"}
      sx={{
        background: `${colors.primary[400]}`,
        borderRight: `1px solid ${colors.gray[300]}`,
        position: "relative",
      }}
    >
      <div style={{ paddingBottom: "14px" }}>
        <CardMedia
          sx={{
            width: "160px",
            height: "28px",
            marginTop: "15px",
            marginLeft: "40px",
          }}
          image={theme.palette.mode === "dark" ? logodark : logo}
        />
      </div>

      <Link to={"/products"}>
        <button
          style={{
            width: "100%",
            padding: "10px",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            background: `${colors.gray[300]}`,
            border: `1px solid ${colors.gray[300]}`,
            marginTop: "5px",
            color: `${colors.gray[100]}`,
            cursor: "pointer",
          }}
        >
          <Typography variant="h5"> Products </Typography> <ShoppingCart />
        </button>
      </Link>
      <Link to={"/delivery"}>
        <button
          style={{
            width: "100%",
            padding: "10px",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            background: `${colors.gray[300]}`,
            border: `1px solid ${colors.gray[300]}`,
            marginTop: "5px",
            color: `${colors.gray[100]}`,
            cursor: "pointer",
          }}
        >
          <Typography variant="h5"> Delivery </Typography> <Sell />
        </button>
      </Link>
      <Link to={"/purchases"}>
        <button
          style={{
            width: "100%",
            padding: "10px",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            background: `${colors.gray[300]}`,
            border: `1px solid ${colors.gray[300]}`,
            marginTop: "5px",
            color: `${colors.gray[100]}`,
            cursor: "pointer",
          }}
        >
          <Typography variant="h5"> Purchases </Typography> <LocalMall />
        </button>
      </Link>

      <Link to={"/contact"}>
        <button
          style={{
            width: "100%",
            padding: "10px",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            background: `${colors.gray[300]}`,
            border: `1px solid ${colors.gray[300]}`,
            marginTop: "5px",
            color: `${colors.gray[100]}`,
            cursor: "pointer",
          }}
        >
          <Typography variant="h5"> Contact </Typography> <SettingsPhone />
        </button>
      </Link>

      <button
        style={{
          width: "100px",
          position: "absolute",
          bottom: "50px",
          textAlign: "center",
          padding: "5px",
          display: "flex",
          left: "60px",
          color: "#fff",
          background: "#f91b62",
          border: "1px solid #f91b62",
          borderRadius: '10px'
        }}
      >
        {" "}
        <Logout sx={{ marginLeft: "8px" }} /> <Typography>Sign out</Typography>
      </button>
    </Stack>
  );
};

export default DefaultSidebar;
