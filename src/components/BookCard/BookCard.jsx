import React from 'react'
import './_bookcard.sass'
import { useTheme } from '../ThemeProvider/MyThemeProvider'

export default function BookCard({ book: { name, authors, numberOfPages, publisher, country, mediaType, released}}) {

  const darkTheme = useTheme();

  const theme = {
    backgroundColor: darkTheme ? "#CAF0F8" : "#023E8A",
    color: darkTheme ? "black" : "white"
  }


  return (
  <>
    <div className='book-card' style={theme}>
      <div className='info-cont'>
      <p><b>Name</b>: {name}</p>
      <p><b>Author</b>: {authors}</p>
      <p><b>Number of Pages</b>: {numberOfPages}</p>
      <p><b>Publisher</b>: {publisher}</p>
      <p><b>Country</b>: {country}</p>
      <p><b>Media type</b>: {mediaType}</p>
      <p><b>Released</b>: {released}</p>
      </div>
      <div className='book-image-container'>
      <div className='book-one'>
    
      </div>
      <div className='book-two'>
        
      </div>
      <div className='book-three'>
        
      </div>
      <div className='book-four'>
        
      </div>
      <div className='book-five'>
        
      </div>
      <div className='book-six'>
        
      </div>
      <div className='book-seven'>
        
      </div>
      <div className='book-eight'>
        
      </div>
      <div className='book-nine'>
        
      </div>
      <div className='book-ten'>
        
      </div>
    </div>
    </div>
  </>
  )
}
