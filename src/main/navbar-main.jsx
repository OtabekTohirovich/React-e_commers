import {
  AccountCircle,
  DarkModeOutlined,
  LightModeOutlined,
  Search,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Box, IconButton, InputBase, Stack, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import logo from "../assets/logocha.svg";
// import logodark from "../assets/brand.png";
import { ColorModeContex, tokens } from "../components/theme";
import CartContext from "../context/cart-context";
const NavbarMain = ({ showDrawer, open }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContex);
  const { items } = useContext(CartContext);

  let result = 0
  const data = () => {
    items?.map((item) => (
      result = result + item?.qty
    ));

  };
  data()
  console.log(result);

  return (
    <Box
      sx={{
        background: `${colors.primary[400]}`,
        borderBottom: `1px solid ${colors.gray[300]}`,
      }}
    >
      <div style={{ margin: "auto", width: "95%" }}>
        <Stack
          sx={{ padding: "10px" }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            backgroundColor={colors.gray[300]}
            borderRadius={"18px"}
          >
            <InputBase
              sx={{ ml: 2, flex: 1, width: { xs: "150px", sm: "400px" } }}
              placeholder="Search"
            />
            <IconButton type="button" sx={{ p: 1 }}>
              <Search />
            </IconButton>
          </Box>

          <Stack direction={"row"}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </IconButton>
            <Link to={"/profile"}>
              <IconButton sx={{ margin: " 0 15px" }}>
                <AccountCircle />
              </IconButton>
            </Link>

            <IconButton
              onClick={(e) => {
                showDrawer(open);
              }}
              sx={{ color: `${colors.gray[400]}`, position: "relative" }}
            >
              {theme.palette.mode === "dark" ? (
                <ShoppingCart sx={{ color: "#fff" }} />
              ) : (
                <ShoppingCartOutlined />
              )}
              <div
                style={{
                  position: "absolute",
                  right: "-2px",
                  top: "1px",
                  fontSize: "11px",
                  background: "#ff9800",
                  color: `#fff`,
                  padding: "1px 4px",
                  borderRadius: "10px",
                }}
              >
                {result}
              </div>
            </IconButton>
          </Stack>
        </Stack>
      </div>
    </Box>
  );
};

export default NavbarMain;
