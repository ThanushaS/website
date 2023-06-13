import React from 'react'

const Search = () => {
  return (
<div>
   <div className="search-controller">
      <button className="search-btn">
         <i className="bi bi-search"></i>
         </button>
         <input type="text" placeholder="Search..." />
   </div>
</div>
  )
}

export default Search