import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import "./components/master.css";
import Header from "./components/header";
import Details from "./components/details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";
import Home from "./components/home";
import AboutUs from "./components/about us";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/main" element={<Main />} />
        <Route path="/details/:propid" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
