import React, { Component } from 'react';
import SearchArea from './SearchArea';
import BookList from './Booklist';

class Books extends Component {
    constructor(props) {
      super(props);
      this.state = {
          books:[],
          searchField: '',
          booktype: '',
          printype: ''
      }
    }

    handleSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      let key = 'AIzaSyCZpwG98Mk3oQOoAClpWwcXi28JoV9pqhQ'
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
            <SearchArea handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange}/>
            <BookList books={this.state.books}/>
          </div>
        );
  }
}

export default Books;
