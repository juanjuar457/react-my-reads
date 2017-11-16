import React from 'react';
import BookShelf from './BookShelf.js';
import { Link } from 'react-router-dom';

//KIP the book obj from the api has shelf as a prop as a string!!!
//Similar to the contacts project we had a contactList that held all the contacts when showed
//and we had a create contact component, needed an extra component for the my reads because we
//have 3 different shelves, just re use the book shelf component. Bring the props down.
const BookList = (props) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>React My Reads</h1> </div>
            <div className="list-books-content">
                <BookShelf
                    books={props.books.filter(book=>book.shelf==='currentlyReading')}
                    shelf="Currently Reading"
                    onHandleChange={props.onHandleChange}
                />
                <BookShelf
                    books={props.books.filter(book=>book.shelf==='wantToRead')}
                    shelf="Want to Read"
                    onHandleChange={props.onHandleChange}
                />
                <BookShelf
                    books={props.books.filter(book=>book.shelf==='read')}
                    shelf="Read"
                    onHandleChange={props.onHandleChange}
                />
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
};


export default BookList