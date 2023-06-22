import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { BookList } from './components/BookList'
import Login from './components/Login'
import { useState } from 'react'
import { BookDetail } from './components/BookDetail'

const App = () => {
  const [token, setToken] = useState('')

  return (
    <>
      <header className="header">
        <h1 className="is-size-1">React Library</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<Login setToken={setToken} />} />
          <Route
            path={'/'}
            element={
              token ? <BookList token={token} /> : <Login setToken={setToken} />
            }
          />
          <Route
            path={'/book/:id'} // I don't have code to make this work yet!
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
