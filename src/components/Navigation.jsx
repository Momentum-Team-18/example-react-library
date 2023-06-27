import { Link } from 'react-router-dom'
const Nav = ({ token, handleLogout }) => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <Link to={'/books'}>All Books</Link>
          <Link to={'/books/new'}>Add a Book</Link>
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
  )
}

export default Nav
