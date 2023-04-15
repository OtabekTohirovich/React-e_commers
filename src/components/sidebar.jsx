import { Box, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import React, { useContext } from "react";
import { Drawer, Space } from "antd";
import { Button } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import Cart from "../pages/cart";
import CartContext from "../context/cart-context";
import cartimg from "../assets/logo512.png.ico";


const Sidebar = ({ showDrawer, onClose, open, token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Drawer
        extra={
          <Space>
            <Button sx={{ color: ` ${colors.gray[100]}` }}>
              My shopping cart
            </Button>
          </Space>
        }
        onClick={showDrawer}
        width={420}
        closable={true}
        closeIcon={
          <HighlightOff
            sx={{ color: ` ${colors.gray[100]}` }}
            onClick={onClose}
          />
        }
        open={open}
        style={{ background: ` ${colors.greenAccend[100]}` }}
      >
       <Stack direction={'column'}>
       <img style={{width:"40%", height: "18%", margin:'auto'}} src={cartimg} alt="" />
        <Typography sx={{margin: 'auto'}} variant="h3">Your cart is empty</Typography>
        <Typography pt={2} sx={{margin: 'auto' , width: '70%', textAlign: 'center'}}>There is nothing in your shopping cart. Let's buy something first</Typography>
       </Stack>
      </Drawer>
    </>
  );
};

export default Sidebar;

export const SidebarMenu = ({ showDrawer, onClose, open, token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { items } = useContext(CartContext);
  return (
    <>
      <Drawer
        extra={
          <Space>
            <Button sx={{ color: ` ${colors.gray[100]}` }}>
              My shopping cart
            </Button>
          </Space>
        }
        onClick={showDrawer}
        width={420}
        closable={true}
        closeIcon={
          <HighlightOff
            sx={{ color: ` ${colors.gray[100]}` }}
            onClick={onClose}
          />
        }
        open={open}
        style={{ background: ` ${colors.greenAccend[100]}` }}
      >
        {items?.length ? items?.map((item) => (
          <Box key={item._id}>
            <Cart item={item} />
          </Box>
        )) :  <Stack direction={'column'}>
        <img style={{width:"40%", height: "18%", margin:'auto'}} src={cartimg} alt="" />
         <Typography sx={{margin: 'auto'}} variant="h3">Your cart is empty</Typography>
         <Typography pt={2} sx={{margin: 'auto' , width: '70%', textAlign: 'center'}}>There is nothing in your shopping cart. Let's buy something first</Typography>
        </Stack>}
      </Drawer>
    </>
  );
};

// const [state, setState] = useState(false)
// const theme = useTheme();
// const colors = tokens(theme.palette.mode);
// const clickSidebar = e =>{
//   setState(!e)
// }
// return (
// <div onClick={(e)=>{clickSidebar(state)}} style={{height: '100vh', width: '250px', background: `${colors.primary[400]}`}}>
//     dcvdsvfd
// </div>
// )
