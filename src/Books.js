import React, { Component } from 'react';
import SearchArea from './SearchArea';
import BookList from './Booklist';

class Books extends Component {
    constructor(props) {
      super(props);
      this.state = {
          books:[],
          searchField: '',
          bookType: '',
          printType: ''
      }
    }

    handleSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
       
    handleFilterChange = (e) => {
        this.setState({ filter: e.target.value })
    }

    handlePrintType = (e) => {
        this.setState({ printType: e.target.value })
    }


    handleSubmit = (e) => {
      e.preventDefault();
      let key = 'AIzaSyCZpwG98Mk3oQOoAClpWwcXi28JoV9pqhQ'
      // let url =`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&printType=${this.state.printType}&filter=${this.state.filter}&key=${key}`;
      let url =`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&key=${key}`;
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          console.log(data)
          this.setState({ books: [...data.items]});
        });
    }
      render() {
        console.log(this.state)
          return (
          <div>
            <SearchArea 
              handleSubmit={this.handleSubmit} 
              handleSearchChange={this.handleSearchChange}
              handleFilterChange={this.handleFilterChange}
              handlePrintType={this.handlePrintType}
            />
            <BookList books={this.state.books}/>
          </div>
        );
  }
}

export default Books;
