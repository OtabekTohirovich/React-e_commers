import { Avatar, Box, Container, Stack } from "@mui/material";
import logo from '../assets/logos.png'
const Navbar = () => {
  return (
    <Box>
      <Container fixed>
        <Stack sx={{padding: "10px"}}>
            <Avatar alt="Remy Sharp" sx={{objectFit:'cover'}} src={logo} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
