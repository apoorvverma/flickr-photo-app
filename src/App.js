import NavBar from "./common/NavBar";
import ImageApi from "./common/ImageApi";
import { useState } from "react";
import "./App.css";

function App() {
  let [search, setSearch] = useState("");

  function handleChange(src) {
    setSearch(src);
  }

  return (
    <div className="App">
      <NavBar handleChange={handleChange} />
      <ImageApi searchText={search} />
    </div>
  );
}

export default App;
