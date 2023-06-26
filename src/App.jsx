import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import { BookList } from './components/BookList'
import Login from './components/Login'
import { useState } from 'react'
import { BookDetail } from './components/BookDetail'
import Home from './components/Home'
import useLocalStorageState from 'use-local-storage-state'

const App = () => {
  // const [token, setToken] = useState('')
  const [token, setToken] = useLocalStorageState('reactLibraryToken', '')

  const logout = (e) => {
    e.preventDefault()
    const DEV_URL = 'http://127.0.0.1:8000/'
    const BASE_URL = 'https://drf-library-api-n3g8.onrender.com'
    axios
      .post(
        `${DEV_URL}/auth/token/logout/`,
        {},
        {
          // empty object in the second position is required
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        setToken('')
      })
  }

  return (
    <>
      <BrowserRouter>
        <header className="header-container">
          <h1 className="is-size-1">React Library</h1>
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <Link to={'/books'}>Books</Link>
              </li>
              <li>
                {token ? (
                  <button onClick={logout} className="button is-light">
                    Log Out
                  </button>
                ) : (
                  <Link to="/login" className="button is-light">
                    Log In
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path={'/login'} element={<Login setToken={setToken} />} />
          <Route path={'/'} element={<Home />} />
          <Route
            path={'/books'}
            element={
              token ? (
                <BookList token={token} />
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path={'/books/:id'}
            element={
              token ? (
                <BookDetail token={token} />
              ) : (
                <Login setToken={setToken} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// /login
// /books
// /books/:id
// This is the root route "/"
{
  /* <BookDetail /> */
}
