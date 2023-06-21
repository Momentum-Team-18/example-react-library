import { useState } from 'react'
import axios from 'axios'

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    console.log('username is changing')
    console.log(event)
    setUsername(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://drf-library-api-n3g8.onrender.com/auth/token/login/', {
        username: username,
        password: password,
      })
      .then((res) => setToken(res.data.auth_token))
  }

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <div>
        <input type="submit" value="Log In" />
      </div>
    </form>
  )
}

export default Login