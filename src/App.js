import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'
import './index.css';
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from "./BookShelf";

class App extends Component {
  state = {
      books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false //move me over to bookshelf, - get the pages
      //working without router for now, its easy enough to do, need to know
      //where to put everything first
  };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
        <div>
          {/*<Route exact path='/' render {() => (*/}
            {/*<BookShelf*/}
              {/*books={this.state.books}*/}
            {/*/>*/}
          {/*)}/>*/}
          <BookShelf
              books = {this.state.books}
          />
        </div>
    )
  }
}

export default App
