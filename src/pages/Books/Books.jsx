import React, { useEffect, useState } from 'react'
import BookCard from '../../components/BookCard/BookCard';
import './_books.sass'
import { useTheme } from '../../components/ThemeProvider/MyThemeProvider';
import GotTitle from '../../components/GotTitle/GotTitle';

export default function Books() {
  
  const [books, setBooks] = useState([]);
  const darkTheme = useTheme();

  useEffect(() => {
    fetch ("https://www.anapioficeandfire.com/api/books")
    .then(info => info.json())
    .then(info => setBooks(info));
  }, [])

  
  return (<>
    <GotTitle />
    <div className='book-cont'>
      {darkTheme ? (<div className='book-title-light'>
      <h2>Book's list</h2>
    </div>) : (<div className='book-title-dark'>
      <h2>Book's list</h2>
    </div>)}

    {books.map((book) => {
      return(
        <BookCard key={book.url} book={book}/ >
      )
    })
    }
    </div>
    </>
  )
}

