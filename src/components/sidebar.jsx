import { Box, useTheme } from "@mui/material"
import { useState } from "react";
import { tokens } from "./theme";

const Sidebar = () => {
    const [state, setState] = useState(false)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const clickSidebar = e =>{
      setState(!e)
    }
  return (
    <div onClick={(e)=>{clickSidebar(state)}} style={{height: '100vh', width: '250px', background: `${colors.primary[400]}`}}>
        dcvdsvfd
    </div>
  )
}

export default Sidebar