import { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { createBook } from '../requests'

export const BookForm = ({ token }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pubDate, setPubDate] = useState('')
  const [titlePageImage, setTitlePageImage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    if (titlePageImage) {
      formData.append('title_page', titlePageImage, titlePageImage.name)
    }
    formData.append('title', title)
    formData.append('author', author)
    formData.append('publication_year', pubDate)
    createBook(token, formData)
      .then((res) => {
        setSubmitted(true)
        setTitle('')
        setAuthor('')
        setPubDate('')
      })
      .catch((err) => setError(err.response.data.error))
  }

  const handleImageUpload = (event) => {
    setTitlePageImage(event.target.files[0])
  }

  if (submitted) {
    return <Navigate to="/books" />
  }

  return (
    <div className="container m-5">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="is-size-4">Create a new book</h2>
        {error && <div className="error">{error}</div>}
        <div className="form-controls field">
          <label htmlFor="username-field" className="label">
            title
          </label>
          <div className="control">
            <input
              id="title-field"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Book title"
              value={title}
              className="input"
              required
            />
          </div>
        </div>
        <div className="form-controls field">
          <label htmlFor="author-field" className="label">
            author
          </label>
          <div className="control">
            <input
              id="author-field"
              placeholder="Author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>
        <div className="form-controls field">
          <label htmlFor="pub-date-field" className="label">
            publication date
          </label>
          <div className="control">
            <input
              className="input"
              placeholder="Publication date"
              type="text"
              value={pubDate}
              required
              onChange={(e) => setPubDate(e.target.value)}
            />
          </div>
        </div>
        <div className="form-controls field">
          <label htmlFor="title-page-field" className="label">
            title page image
          </label>
          <div className="control">
            <input
              className="input"
              placeholder="Publication date"
              type="file"
              accept="image/jpeg,image/png,image/gif"
              required
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className="form-submit mt-5">
          <input
            className="button is-outlined is-primary"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  )
}
