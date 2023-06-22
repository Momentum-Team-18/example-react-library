import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'https://drf-library-api-n3g8.onrender.com'

export const BookDetail = ({ bookId, handleGoBack, token }) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/books/${bookId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setBook(res.data)
      })
  }, [bookId])

  return (
    <>
      <button onClick={handleGoBack}> Go Back to All Books </button>
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
