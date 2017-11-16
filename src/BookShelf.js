import React from 'react';

//used the starter code to show the outline of the shelf,
//used template stings and props to show UI, had trouble at first,
//did not need to hard code anything because the api has all those props
//in the book object, made it nice.
const BookShelf = (props) =>  {
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
                                        <select value={book.shelf}
                                                onChange={(event) => props.onHandleChange(book,event.target.value)}>
                                            <option value="" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

export default BookShelf