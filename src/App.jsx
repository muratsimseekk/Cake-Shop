import "./App.css";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-[100px]">
      <Header />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes> */}
    </div>
  );
}

export default App;
