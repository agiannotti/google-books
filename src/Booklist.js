import React from 'react';
<<<<<<< HEAD
import BookData from './BookData';
=======
import BookData from './BookData'

>>>>>>> 36e0e6934fb8f23e2acea2ec723f5241fa2aeb33

const BookList = (props) => {
  console.log(props.books);
  return (
<<<<<<< HEAD
    <div className='list'>
      {props.books.map((book, i) => {
        return (
          <BookData
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.authors}
            published={book.publishedDate}
          />
        );
      })}
    </div>
  );
};

export default BookList;
=======
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
>>>>>>> 36e0e6934fb8f23e2acea2ec723f5241fa2aeb33
