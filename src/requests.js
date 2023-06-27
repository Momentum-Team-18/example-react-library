import axios from 'axios'
const BASE_URL = import.meta.env.VITE_USE_DEV_SERVER
  ? 'http://127.0.0.1:8000'
  : 'https://drf-library-api-n3g8.onrender.com'

export const logIn = (username, password) => {
  return axios.post(`${BASE_URL}/auth/token/login/`, {
    username: username,
    password: password,
  })
}

export const logOut = (token) => {
  return axios.post(
    `${BASE_URL}/auth/token/logout/`,
    {},
    { headers: { Authorization: `Token ${token}` } }
  )
}

export const getBooks = (token) => {
  return axios.get(`${BASE_URL}/api/books`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
}

export const getBook = (token, id) => {
  return axios.get(`${BASE_URL}/api/books/${id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
}
