import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const BASE_URL = 'https://drf-library-api-n3g8.onrender.com'
const DEV_URL = 'http://127.0.0.1:8000/'

export const BookDetail = ({ token }) => {
  const [book, setBook] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`${DEV_URL}/api/books/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
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
