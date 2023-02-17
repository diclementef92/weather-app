import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes } from "react-router-dom/dist";
import { Route } from "react-router-dom";
import WeatherCardList from "./components/WeatherCardList";
import MainSearch from "./components/MainSearch";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
