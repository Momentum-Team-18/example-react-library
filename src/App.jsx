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
import RequireAuth from './components/RequireAuth'
import { NoMatch } from './components/NoMatch'
import Navigation from './components/Navigation'
import { BookForm } from './components/BookForm'

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
          <Navigation token={token} handleLogout={handleLogout} />
        </header>
        <Routes>
          <Route path={'/login'} element={<Login setToken={setToken} />} />
          <Route path={'/'} element={<Home />} />
          <Route element={<RequireAuth token={token} />}>
            <Route path={'/books'} element={<BookList token={token} />} />
            <Route path={'/books/:id'} element={<BookDetail token={token} />} />
            <Route path={'books/new'} element={<BookForm token={token} />} />
          </Route>
          <Route path={'*'} element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
