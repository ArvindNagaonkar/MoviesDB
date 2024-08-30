import { NavBar } from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TopRated from "./Pages/TopRated";
import Upcoming from "./Pages/Upcoming";
import Search from "./Pages/Search";

import "./App.css";
import Detail from "./Pages/Detail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path={`/details/:id`} element={<Detail />} />
        <Route path={`/search/:movie_name`} element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
