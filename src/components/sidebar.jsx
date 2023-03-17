import { Box, useTheme } from "@mui/material"
import { tokens } from "./theme";

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{width: '200px', height: '100vh', background: `${colors.primary[400]}`}}>
        sds 
    </Box>
  )
}

export default Sidebar