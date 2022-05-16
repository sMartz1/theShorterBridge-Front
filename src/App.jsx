import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landpage from "./components/Landpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import MyLinks from "./components/MyLinks"
import { AuthProvider } from "./context/authContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/MUIThemes/mainTheme";
import LoggedRoute from "./components/LoggedRoute";
import Redirect from "./components/Redirect";
import Loading from "./components/Loading";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <div className="app-container">
            <Header />
            <Routes>
              <Route path="/:short" element={<Redirect />} />
              <Route path="/" element={<Landpage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-links" element={<LoggedRoute><MyLinks /></LoggedRoute>} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
