import "./App.css";
// import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContex, useMode } from "./components/theme";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContex.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{display: 'flex'}}>
          <Sidebar />
          <Navbar />
          {/* <Routes> */}
          {/* <Route path="/" /> */}
          {/* <Route path="/channel/:id" element={<Chanel />} /> */}
          {/* <Route path="/vedio/:id" element={<Vediodetails />} /> */}
          {/* <Route path="/search/:id" element={<Search />} /> */}
          {/* </Routes> */}
        </Box>
      </ThemeProvider>
    </ColorModeContex.Provider>
  );
}

export default App;
