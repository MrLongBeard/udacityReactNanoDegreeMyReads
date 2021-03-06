import React from 'react'

const BookShelf=(props)=>{
const {books,heading,handleChange} = props

return(
    <div className="list-books-content">
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{heading}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.length>0
                        ?books.map(book=>
                            <li key={book.title}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${typeof book.imageLinks !== 'undefined'&&book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                        <select defaultValue={book.shelf} name={book.title} onChange={(event)=>handleChange(event,book)}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors.map(author=>author)}</div>
                                    </div>
                            </li>
                            )
                        :<div>...loading</div>
                        }
                    </ol>
                </div>
            </div>
        </div>
    </div>
)
}
export default BookShelf