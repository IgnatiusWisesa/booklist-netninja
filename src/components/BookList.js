import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetail'

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                { books.map((book) => {
                    return (<BookDetails key={book.id} book={book} id={book.id} />)
                })}
            </ul>
        </div>
    ):
    (
        <div className="empty">No books to read.. Helo free time</div>
    )
}
 
export default BookList;