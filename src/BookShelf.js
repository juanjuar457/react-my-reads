import React from 'react';

function BookShelf (props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{
                                        width: 128,
                                        height: 188,
                                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                    }}></div>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf}>
                                            onChange{(e) => props.onHandleChange(book, e.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors.map((author) => {
                                    return (
                                        <div key={author} className="author">{author}</div>
                                    )
                                })}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
//TODO: render the books correctly, use old code from v1
//TODO: put the search book page comp in as a child comp in the app.js - make that the fork


            //>>>>>>>>>>>>>>>>>>>>>>>>BEGIN HARD CODED HTML OF MOCK UP<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            // <div className="app">
            //     {this.state.showSearchPage ? (
            //         <div className="search-books">
            //             <div className="search-books-bar">
            //                 <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
            //                 <div className="search-books-input-wrapper">
            //                     {/*
            //       NOTES: The search from BooksAPI is limited to a particular set of search terms.
            //       You can find these search terms here:
            //       https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            //
            //       However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            //       you don't find a specific author or title. Every search is limited by search terms.
            //     */}
            //                     <input type="text" placeholder="Search by title or author"/>
            //
            //                 </div>
            //             </div>
            //             <div className="search-books-results">
            //                 <ol className="books-grid"></ol>
            //             </div>
            //         </div>
            //     ) :
            //         //START BOOKS LIST HARD CODED HTML >>>>>>>>>>>>>>>>>>>>>>>
            //         (

export default BookShelf