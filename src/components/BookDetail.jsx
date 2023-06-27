import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBook } from '../requests'

export const BookDetail = ({ token }) => {
  const [book, setBook] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getBook(token, id).then((res) => {
      setBook(res.data)
    })
  }, [id, token])

  return (
    <>
      <Link className="button" to={'/'}>
        Go Back to All Books
      </Link>
      {book && (
        <>
          <div className="book content container-box" id={book.pk}>
            <h2>{book.title}</h2>
            <div className="details">
              <p>{book.author}</p>
              <p>{book.publication_year}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
