import React from 'react';

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleSearchChange} type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchArea;