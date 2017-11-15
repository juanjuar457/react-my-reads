import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './index.css';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BookList from "./BookList";
import SearchPage from "./SearchPage";

class App extends Component {
  state = { books: [] };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  handleChange = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf;
          this.setState(previousState => ({
              books: previousState.books.filter(book => book.id !== book.id).concat([book])
          }))
      })
  };

  render() {
    return (
        <div className="app">
            <Switch>
            <Route exact path='/' render={() => (
                <BookList
                 books={this.state.books}
                 onHandleChange={ this.handleChange }
                />
            )}/>
            <Route path="/search" render={() => (
                <SearchPage
                books={this.state.books}
                onHandleChange={ this.handleChange }
                />
            )}/>
            </Switch>
        </div>
    )
  }
}

export default App
