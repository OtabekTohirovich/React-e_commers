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
  Grid,
  IconButton,
  Stack,
  Typography,
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
    <Box sx={{ background: `${colors.primary[400]}`, borderBottom: `1px solid ${colors.gray[300]}`}}>
      <Container fixed>
        <Stack sx={{ padding: "10px" }} direction={"row"}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Avatar alt="Remy Sharp" sx={{ objectFit: "cover" }} src={logo} />
            </Grid>
            <Grid item xs={4}>
              <Stack sx={{ padding: "10px" }} direction={"row"} justifyContent='center'>
                <Typography m={" 0 25px"} sx={{cursor:'pointer'}}> Home </Typography>
                <Typography m={" 0 25px"} sx={{cursor:'pointer'}}> Products </Typography>
                <Typography m={" 0 25px"} sx={{cursor:'pointer'}}> FAQ </Typography>
                <Typography m={" 0 25px"} sx={{cursor:'pointer'}}> Contact </Typography>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction={"row"} justifyContent={'flex-end'}>
                <IconButton sx={{margin:" 0 15px"}} onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                    <DarkModeOutlined />
                  ) : (
                    <LightModeOutlined />
                  )}
                </IconButton>
                <button
                  style={{
                    background: `${colors.redAccend[400]}`,
                    color: "#fff",
                    padding: " 7px 20px",
                    border: `1px solid ${colors.redAccend[400]}`,
                    borderRadius: "5px",
                    margin: '3px 0',
                    cursor:'pointer'
                  }}
                >
                  Sign In
                </button>
                <Typography sx={{ padding: "10px" , margin:" 0 15px", cursor:'pointer'}}>Sign Up</Typography>
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
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
