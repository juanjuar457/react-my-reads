import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BookList from "./BookList";
import SearchBookPage from "./SearchBookPage";

class App extends Component {
  state = { books: [] };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
        console.log(this.state.books)
    });
  }


//only issue is whole list will not stick after choosing new shelf for a book..
    //The data persists though..
    //11/17 > FIXED!!! problem was the setState func, named books for both args of book,
    //made the page shown freak out when updating the state when selecting a
    //shelf for a book, works now!!
  handleChange = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf;
          this.setState(previousState => ({
              books: previousState.books.filter(b => b.id !== book.id).concat([ book ])
          }))
      })
  };
//not sure if we need line 36? Tried using example from contacts app
  render() {
    return (
        <div className="app">
            <Route exact path="/" render={() => (
                <BookList
                 books={this.state.books}
                 onHandleChange={ this.handleChange }
                />
            )}/>
            <Route path="/search" render={({history}) => (
                <SearchBookPage
                books={this.state.books}
                onHandleChange={ this.handleChange }
                />
            )}/>
        </div>
    )
  }
}

export default App
