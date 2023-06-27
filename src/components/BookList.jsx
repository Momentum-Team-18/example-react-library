import axios from 'axios'
import { useState, useEffect } from 'react'
import { BookCard } from './BookCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BookDetail } from './BookDetail'
import { getBooks } from '../requests'

export const BookList = ({ token, setSelected }) => {
  const [books, setBooks] = useState([])
  const [bookTitles, setBookTitles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getBooks(token).then((res) => {
      const bookTitles = res.data.map((obj) => obj.title)
      setBookTitles(bookTitles)
      setBooks(res.data)
      setIsLoading(false)
    })
  }, [token])

  if (isLoading) {
    return (
      <Skeleton
        count={10}
        height="75px"
        width="90%"
        containerClassName="skeleton-container"
      />
    )
  }

  return (
    <div className="book-list container-box">
      {books.map((book) => (
        <BookCard
          key={book.pk}
          title={book.title}
          bookId={book.pk}
          featured={book.featured}
        />
      ))}
    </div>
  )
}
