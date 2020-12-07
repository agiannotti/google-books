import React from 'react';
import BookData from './BookData'


const BookList = (props) => {
  console.log(props.books);
  return (
      <div className="list">
          {
            props.books.map((book, i) =>{
              return <BookData 
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.authors}
                        published={book.publishedDate}
                      />
            })
          }
      </div>
  )
}

export default BookList;