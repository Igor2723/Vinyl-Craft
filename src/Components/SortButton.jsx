import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./SortButton.css";

export default function SortButton({ onSortChange }) {
  const [select, setSelect] = useState("");

  function handleSortChange(e) {
    setSelect(e.target.value);
    onSortChange(e.target.value);
  }

  return (
    <>
      <div className="sort-container">
        <div className="sort-title">
          <FontAwesomeIcon icon={faArrowDownWideShort} style={{ color: "#917A51" }}/>
          <h5>Sort by:</h5>
        </div>
        <select name="sort-list"
        id="sort-list"
        value={select} 
        onChange={handleSortChange}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="highToLow">Price:Highest</option>
          <option value="lowToHigh">Price:Lowest</option>
        </select>
      </div>
    </>
  );
}
