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

const DefaultSidebar = ({ handleAuth, role }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const ClearLocal = () => {
    localStorage.clear();
    handleAuth();
  };
  const Data = [
    { link: "/", name: "Products", icon: <ShoppingCart /> },
    { link: "/delivery", name: "Delivery", icon: <Sell /> },
    { link: "/purchases", name: "Purchases", icon: <LocalMall /> },
    { link: "/contact", name: "Contact", icon: <SettingsPhone /> },
  ];
  const AdminData = [
    { link: "/", name: "Products" },
    { link: "/delivery", name: "Delivery" },
    { link: "/purchases", name: "Purchases" },
    { link: "/contact", name: "Contact" },
  ];

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
      {role === "admin"
        ? AdminData.map((link) => (
            <Link to={link.link} key={link.name}>
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
                <Typography variant="h5"> {link.name} </Typography> {link.icon}
              </button>
            </Link>
          ))
        : Data.map((link) => (
            <Link to={link.link} key={link.name}>
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
                <Typography variant="h5"> {link.name} </Typography> {link.icon}
              </button>
            </Link>
          ))}

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
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={ClearLocal}
      >
        <Logout sx={{ marginLeft: "8px" }} /> <Typography>Sign out</Typography>
      </button>
    </Stack>
  );
};

export default DefaultSidebar;
