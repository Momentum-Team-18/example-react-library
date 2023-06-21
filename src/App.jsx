import './App.css'
import { BookList } from './components/BookList'
import Login from './components/Login'
import { useState } from 'react'

const App = () => {
  const [token, setToken] = useState('')

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <header className="header">
        <h1 className="is-size-1">React Library</h1>
      </header>
      <BookList token={token} />
    </>
  )
}

export default App
