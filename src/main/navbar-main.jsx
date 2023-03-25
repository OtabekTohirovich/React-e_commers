import {
  DarkModeOutlined,
  LightModeOutlined,
  Search,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  InputBase,
  Stack,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logocha.svg";
// import logodark from "../assets/brand.png";
import { ColorModeContex, tokens } from "../components/theme";
const NavbarMain = ({ showDrawer, open }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContex);

  return (
    <Box
      sx={{
        background: `${colors.primary[400]}`,
        borderBottom: `1px solid ${colors.gray[300]}`,
      }}
    >
      <div style={{ margin: "auto", width: "95%" }}>
        <Stack sx={{ padding: "10px" }} direction={"row"} justifyContent={'space-between'}>
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
            <IconButton
              sx={{ margin: " 0 15px" }}
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </IconButton>

            <IconButton
              onClick={(e) => {
                showDrawer(open);
              }}
              sx={{ color: `${colors.gray[200]}` }}
            >
              {theme.palette.mode === "dark" ? (
                <ShoppingCart />
              ) : (
                <ShoppingCartOutlined />
              )}
            </IconButton>
          </Stack>
        </Stack>
      </div>
    </Box>
  );
};

export default NavbarMain;
