import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form> 
        <div className="input-group">
           <input 
           type="text" 
           placeholder="Search your favourite Restaurant..." 
           id="search_field" 
           className="form-control" 
           />

          <div className="input-group-attend">
            <button id="Search_btn" className="btn">
               <FaSearch className="fa fa-search" />"
            </button>
          </div>
        </div>
    </form>
  );
}
