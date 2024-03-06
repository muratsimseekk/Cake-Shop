import "./App.css";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./pages/Footer";
import SpecialPage from "./pages/SpecialPage";
import Cookies from "./pages/Cookies";

function App() {
  return (
    <div className=" w-full ">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/specialday" element={<SpecialPage />} />
      </Routes>
      <Routes>
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
