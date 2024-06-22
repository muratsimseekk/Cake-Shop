import "./App.css";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./pages/Footer";
import SpecialPage from "./pages/SpecialPage";
import Cookies from "./pages/Cookies";
import Wedding from "./pages/Wedding";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

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
      <Routes>
        <Route path="/weddings" element={<Wedding />} />
      </Routes>
      <Routes>
        <Route path="/faq" element={<Faq />} />
      </Routes>
      {/* <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
