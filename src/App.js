import React from "react";
import { Switch, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    // react-router-dom@6
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
