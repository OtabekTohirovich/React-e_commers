import {
  DarkModeOutlined,
  LightModeOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logocha.svg";
import logodark from "../assets/brand.png";
import { ColorModeContex, tokens } from "./theme";
const Navbar = ({ showDrawer, open }) => {
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
        <Stack sx={{ padding: "10px" }} direction={"row"}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Link to={"/"}>
                <CardMedia
                  sx={{ width: "160px", height: "28px", marginTop: "8px" }}
                  image={theme.palette.mode === "dark" ? logodark : logo}
                />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Stack
                sx={{ padding: "10px" }}
                direction={"row"}
                justifyContent="center"
              >
                <Link to={"/"}>
                  <Typography
                    m={" 0 25px"}
                    sx={{ cursor: "pointer", color: `${colors.gray[100]}` }}
                  >
                    Home
                  </Typography>
                </Link>

                <Link to={"/public-products"}>
                  <Typography
                    m={" 0 25px"}
                    sx={{ cursor: "pointer", color: `${colors.gray[100]}` }}
                  >
                    Products
                  </Typography>
                </Link>
                <Link to={"/faq"}>
                  <Typography
                    m={" 0 25px"}
                    sx={{ cursor: "pointer", color: `${colors.gray[100]}` }}
                  >
                    FAQ
                  </Typography>
                </Link>
                <Link to={"/contact"}>
                  <Typography
                    m={" 0 25px"}
                    sx={{ cursor: "pointer", color: `${colors.gray[100]}` }}
                  >
                    Contact
                  </Typography>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction={"row"} justifyContent={"flex-end"}>
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
                <Link to={"/sign-in"}>
                  <button
                    style={{
                      background: `${colors.redAccend[400]}`,
                      color: "#fff",
                      padding: " 7px 20px",
                      border: `1px solid ${colors.redAccend[400]}`,
                      borderRadius: "5px",
                      margin: "5px 0",
                      cursor: "pointer",
                    }}
                  >
                    Sign In
                  </button>
                </Link>
                <Link to={"/sign-up"}>
                  <Typography
                    sx={{
                      padding: "10px",
                      margin: " 0 15px",
                      cursor: "pointer",
                      color: `${colors.gray[100]}`
                    }}
                  >
                    Sign Up
                  </Typography>
                </Link>

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
            </Grid>
          </Grid>
        </Stack>
      </div>
    </Box>
  );
};

export default Navbar;
