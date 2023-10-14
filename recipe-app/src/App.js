import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/detailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
