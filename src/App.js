import React, { useState } from "react";
import "./App.css";
import CITIES from "./cities.json";

const App = () => {
  const [searchText, setSearchText] = useState("");

  function SearchTextHandler(event) {
    setSearchText(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" placeholder="Search city..." onChange={SearchTextHandler} />
      {CITIES.filter((val) =>
        val.city.toLowerCase().includes(searchText.toLowerCase())
      ).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.city}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
