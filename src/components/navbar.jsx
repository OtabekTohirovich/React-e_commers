import {
  DarkModeOutlined,
  LightModeOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import logo from "../assets/logos.png";
import { ColorModeContex, tokens } from "./theme";
const Navbar = ({ clickSidebar, state }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContex);

  return (
    <Box sx={{ background: `${colors.primary[400]}` }}>
      <Container fixed>
        <Stack sx={{ padding: "10px" }} direction={"row"}>
          <IconButton
            onClick={(e) => {
              clickSidebar(state);
            }}
            sx={{ color: `${colors.gray[200]}` }}
          >
            {theme.palette.mode === "dark" ? (
              <ShoppingCart />
            ) : (
              <ShoppingCartOutlined />
            )}
          </IconButton>
          <Avatar alt="Remy Sharp" sx={{ objectFit: "cover" }} src={logo} />
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
