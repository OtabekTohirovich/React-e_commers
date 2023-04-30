import { CardMedia, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import logo from "../assets/logocha.svg";
import logodark from "../assets/brand.png";
import {
  AddCircle,
  AutoFixHigh,
  Grade,
  LocalMall,
  Logout,
  Sell,
  Settings,
  SettingsPhone,
  ShoppingCart,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import CreateProduct from "./create-product";
import { useState } from "react";

const DefaultSidebar = ({ handleAuth, role }) => {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState(false);
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
    { link: "/", name: "Products", icon: <Settings /> },
    { link: "/users-orders", name: "Orders", icon: <Grade /> },
    { link: "/create-category", name: "Category", icon: <AddCircle /> },
  ];

  const colorslink = {
    background: `${colors.blueAccend[500]}`,
  };
  const nocolorslink = {
    background: `${colors.gray[300]}`,
  };

  const handleClose = () => {
    setOpen(false);
  };
  const opens = () => {
    setOpen(true);
  };

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
            <NavLink to={link.link} key={link.name}>
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
            </NavLink>
          ))
        : Data.map((link) => (
            <NavLink
              to={link.link}
              key={link.name}
              className="changehover"
              style={{
                width: "100%",
                padding: "10px 25px",
                textAlign: "start",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "5px",
                cursor: "pointer",
                color: `${colors.gray[100]}`
              }}
            >
              <Typography variant="h5"> {link.name} </Typography> {link.icon}
            </NavLink>
          ))}
      {role === "admin" ? (
        <button
          onClick={opens}
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
          <Typography variant="h5"> Createe </Typography> <AutoFixHigh />
        </button>
      ) : (
        ""
      )}

      <CreateProduct open={open} handleClose={handleClose} />
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
