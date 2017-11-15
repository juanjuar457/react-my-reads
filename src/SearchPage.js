import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state = {
        query: '',
        results: []
    };

    static propTypes = {
        books: PropTypes.array,
        onHandleChange: PropTypes.func.isRequired
    };

    updateQuery = (query) => {
        this.setState({
            query: query
        });
        if (query){
            BooksAPI.search(query.trim(), 50).then((results) => {
                    if(!results || results.error){
                        this.setState({results: []})
                    } else {
                        this.bookShelf(results);
                        this.setState({results})
                    }
                }
            )} else {
            this.setState({results: []})
        }
    };

    bookShelf = (results) => {
        for (let result of results){
            for (let book of this.props.books)
                if (result.id === book.id) {
                    result.shelf = book.shelf
                } else {
                    result.shelf = 'none'
                }
        }

    };

    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={(event) => this.updateQuery(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.results.map((book)=>(
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover'})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf}
                                                    onChange={(event) => this.props.onHandleChange(book,event.target.value)}>
                                                <option value="" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors && book.authors.map((author)=>{
                                        return(
                                            <div key={author} className="author">{author}</div>
                                        )
                                    })}</div>
                                </div>
                            </li>
                        ))}

                    </ol>
                </div>
                <div className="back-arrow">
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
}

export default SearchPage

// const { onHandleChange} = this.props;
// const { results } = this.state;
// console.log("what the heck was this called again",results, onHandleChange);