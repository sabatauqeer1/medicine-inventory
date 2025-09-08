import data from "./data.json";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async () => {
    try {
      navigate(`/api/myInventory/${searchValue.trim()}/info`);
    } catch (error) {
      console.error("Error submitting search:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div className="logo">
        <h1>HOMEO INVENTORY</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={searchValue}
          name="itemValue"
          placeholder="search..."
          onChange={handleSearch}
          autoComplete="on"
        />
      </div>
      <div className="search-bar">
        <button onClick={HandleSubmit}>Submit</button>
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchTerm = searchValue.toLowerCase();
            const itemValue = item.itemValue.toLowerCase();
            return (
              searchTerm &&
              itemValue.startsWith(searchTerm) &&
              itemValue !== searchTerm
            );
          })
          .map((item) => (
            <div
              className="dropdown-row"
              onClick={() => setSearchValue(item.itemValue)}
              key={item.itemValue}
            >
              <div> {item.itemValue} </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
