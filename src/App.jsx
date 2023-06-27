import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import { BookList } from './components/BookList'
import Login from './components/Login'
import { useState } from 'react'
import { BookDetail } from './components/BookDetail'
import Home from './components/Home'
import useLocalStorageState from 'use-local-storage-state'
import { logOut } from './requests'

const App = () => {
  const [token, setToken] = useLocalStorageState('reactLibraryToken', '')

  const handleLogout = () => {
    console.log('logging out')
    logOut(token).then((res) => {
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
                  <button onClick={handleLogout} className="button is-light">
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
          <Route
            path={'/'}
            element={token ? <Navigate to="/books" replace={true} /> : <Home />}
          />
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
