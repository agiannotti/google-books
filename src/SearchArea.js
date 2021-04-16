import React from 'react';

const SearchArea = (props) => {
  return (
<<<<<<< HEAD
    <div className='search-area'>
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleSearchChange} type='text' />
        <button type='submit'>Search</button>

        <br />
        <label>Print Type</label>
        <select onChange={props.handlePrintType}>
          <option>all</option>
          <option>books</option>
          <option>magazines</option>
        </select>
        <br />

        <label>Filter by Price</label>
        <select onChange={props.handleFilterChange}>
          <option>free-ebooks</option>
          <option>full</option>
          <option>paid-ebooks</option>
          <option>partial</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;
=======
    <div className="search-area">
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleSearchChange} type="text"/>
        <button type="submit">Search</button>

        <br />
        <label>Print Type</label>
        <select onChange ={props.handlePrintType}>
        <option>all</option>
        <option>books</option>
        <option>magazines</option>
        </select>
        <br />  
        
        <label>Filter by Price</label>
        <select onChange={props.handleFilterChange}>
        <option>free-ebooks</option>
        <option>full</option>
        <option>paid-ebooks</option>
        <option>partial</option>
        </select>

      </form>
    </div>
  )
}

export default SearchArea;
>>>>>>> 36e0e6934fb8f23e2acea2ec723f5241fa2aeb33
