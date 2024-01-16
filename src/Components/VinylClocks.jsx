import React, { useEffect, useMemo, useState } from "react";
import "./VinylClocks.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import SortButton from "./SortButton.jsx";
import { inventoryData } from "./data.js";
import Product from "./Product.jsx";
import FilterButton from "./FilterButton.jsx";
import Pagination from "./Pagination.jsx"; 


export default function VinylClocks() {
  const [dataList, setDataList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  
  // Add default value on page load
  useEffect(() => {
    setDataList(inventoryData);
  }, []);

  // Function to get filtered and sorted list
  function getFilteredAndSortedList() {
    let filteredList = dataList;
    // Filter by category
    if (selectedCategory) {
      filteredList = dataList.filter((item) => item.cat === selectedCategory);
    }

    // Sort by 
    switch (sortOption) {
      case "highToLow":
        filteredList.sort((a, b) => b.price - a.price);
        break;
      case "lowToHigh":
        filteredList.sort((a, b) => a.price - b.price);
        break;
        case "oldest":
          filteredList.sort((a, b) => a.id - b.id);
        break;

      default:
        // Latest or default sorting
        case "latest":
        filteredList.sort((a, b) => b.id - a.id);
        break;
    }

    return filteredList;
  }

  // Avoid duplicate function calls with useMemo
  var filteredAndSortedList = useMemo(getFilteredAndSortedList, [
    selectedCategory,
    sortOption,
    dataList,
  ]);

  function handleCategoryChange(option) {
    setSelectedCategory(option);
  }

  function handleSortChange(option) {
    setSortOption(option);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
        <Navbar />

      <div className="vc-container">
      
        <div className="filter-sort">
          <FilterButton onFilterChange={handleCategoryChange}/>
          <SortButton onSortChange={handleSortChange} />
        </div>
        <div className="products-container">
          <div className="catSort-container">
              <form onFilterChange={handleCategoryChange} className="cat-form" action="#">
                <h5>Categories:</h5>
                <input type="checkbox" checked={selectedCategory === ""} onChange={() => setSelectedCategory("")} id="all" className="radio-input" name="" value=""></input>
                <label htmlFor="all">All</label><br/>
                <input type="checkbox" checked={selectedCategory === "movies"} onChange={() => setSelectedCategory( "movies")} id="movies" className="radio-input" name="" value="movies"></input>
                <label htmlFor="movies">Movies</label><br/>
                <input type="checkbox" checked={selectedCategory === "music"} onChange={() => setSelectedCategory("music")} id="music" className="radio-input" name="" value="music"></input>
                <label htmlFor="music">Music</label><br/>
                <input type="checkbox" checked={selectedCategory === "sport"} onChange={() => setSelectedCategory("sport")} id="sport" className="radio-input" name="" value="sport"></input>
                <label htmlFor="sport">Sport</label><br/>
                <input type="checkbox" checked={selectedCategory === "other"} onChange={() => setSelectedCategory("other")} id="other" className="radio-input" name="" value="other"></input>
                <label htmlFor="other">Other</label>
            </form>
            <form onSortChange={handleSortChange} className="sort-form" action="#">
                <h5>Sort by:</h5>
                <h3>Date:</h3>
                <input type="checkbox" checked={sortOption === "latest"} onChange={() => setSortOption("latest")}  
                       id="latest" className="radio-input" name="" value="latest"></input>
                <label>Latest</label><br/>
                <input type="checkbox" checked={sortOption === "oldest"} onChange={() => setSortOption( "oldest")} 
                       id="oldest" className="radio-input" name="" value="oldest"></input>
                <label>Oldest</label><br/>
                <h3>Price:</h3>
                <input type="checkbox" checked={sortOption === "highToLow"} onChange={() => setSortOption("highToLow")} 
                       id="lowest" className="radio-input" name="" value="highToLow"></input>
                <label>Highest</label><br/>
                <input type="checkbox" checked={sortOption === "lowToHigh"} onChange={() => setSortOption( "lowToHigh")} 
                       id="highest" className="radio-input" name="" value="lowToHigh"></input>
                <label>Lowest</label>
                
            </form>
          </div>
            <div className="products">
            <Product filteredAndSortedList={currentItems}/>
              </div>
        </div>
        <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredAndSortedList.length}
        paginate={paginate}
      />
      </div>
      <Footer />
    </>
  );
}
  
