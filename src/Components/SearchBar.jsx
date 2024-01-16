import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from '../features/search/searchSlice.js';

export default function SearchBar() {
    
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };
  
  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };
    return (
        <>
            <form className="search-form" action="">
                <input 
                type="text" 
                placeholder="Search.." 
                className="search-input" 
                name="search"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                />
                    {searchTerm.length > 0 && (
                <button
                onClick={onClearSearchTermHandler}
                type="button"
                className="search-clear-button"
                >
                <FontAwesomeIcon icon={faXmark} style={{color: "#0f5ee6",}} />
                </button>
            )}   
            </form>
        </>
    );    
}