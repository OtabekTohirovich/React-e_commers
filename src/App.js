import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContex, useMode } from "./components/theme";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import { useState } from "react";
import Products from "./components/products";
import Faq from "./components/faq";
import Contact from "./components/contact.jsx";

function App() {
  const [theme, colorMode] = useMode();
  const [state, setState] = useState(false);
  const clickSidebar = (e) => {
    setState(!e);
  };
  console.log(state);
  return (
    <ColorModeContex.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Navbar clickSidebar={clickSidebar} state={state} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          {state ? <Sidebar /> : ""}
        </div>
      </ThemeProvider>
    </ColorModeContex.Provider>
  );
}

export default App;
