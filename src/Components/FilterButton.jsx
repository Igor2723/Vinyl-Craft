import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./VinylClocks.css";

export default function FilterButton({ onFilterChange }) {
  const [selectCat, setSelectCat] = useState("");

  function handleCategoryChange(event) {
    setSelectCat(event.target.value);
    onFilterChange(event.target.value);
  }

  return (
    <>
      <div className="filter-container">
            <div className="filter-title">
              <FontAwesomeIcon icon={faFilter} style={{color: "#917A51",}} />
              <h5>Category:</h5>
            </div>
            <select
              name="cat-list"
              id="cat-list"
              onChange={handleCategoryChange}
              value={selectCat}
            >
              <option value="">All</option>
              <option value="movies">Movies</option>
              <option value="music">Music</option>
              <option value="sport">Sport</option>
              <option value="other">Other</option>
            </select>
          </div>
    </>
  );
}
