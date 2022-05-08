import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landpage from "./components/Landpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {AuthProvider} from "./context/authContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/MUIThemes/mainTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="app-container">
    <Header />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landpage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
