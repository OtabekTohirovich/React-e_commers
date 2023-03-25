import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContex, useMode } from "./components/theme";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import { useEffect, useState } from "react";
import PublicProducts from "./pages/products";
import Faq from "./components/faq";
import Contact from "./components/contact.jsx";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import { getProducts } from "./api";
import MainPage from "./pages/main";
import NavbarMain from "./main/navbar-main";
import DefaultSidebar from "./components/default-sidebar";
import Purchases from "./pages/purchases";
import Delivery from "./pages/delivery";

function App() {
  const [theme, colorMode] = useMode();
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);

  // const [states, setStates] = useState("");
  const token = localStorage.getItem('token')
  // const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState();
  useEffect(() => {
    getProducts().then((data) => {
      setData(data.data.data);
    });
  }, []);
  
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleAuth = (e) => {
    setState(e);
  };

  if (token) {
    return (
      <ColorModeContex.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <DefaultSidebar/>
            <main className="content">
              <NavbarMain showDrawer={showDrawer} open={open} />
              <Routes>
                <Route path="/" element={<MainPage data={data}/>} />
                <Route path="/delivery" element={<Delivery />} /> 
                <Route path="/products" element={<PublicProducts data={data} />} />
                <Route path="/purchases" element={<Purchases />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Sidebar showDrawer={showDrawer} open={open} onClose={onClose}/>
          </div>
        </ThemeProvider>
      </ColorModeContex.Provider>
    );
    
  } else {
    return (
      <ColorModeContex.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Navbar showDrawer={showDrawer} open={open} />
              <Routes>
                <Route path="/" element={<Dashboard data={data}/>} />
                <Route
                  path="/sign-in"
                  element={<Signin handleAuth={handleAuth} />}
                />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/public-products" element={<PublicProducts data={data} />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Sidebar showDrawer={showDrawer} open={open} onClose={onClose}/>
          </div>
        </ThemeProvider>
      </ColorModeContex.Provider>
    );
  }
  
}

export default App;
