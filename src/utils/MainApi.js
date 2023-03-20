// export const BASE_URL = 'https://api.movies.proactative.nomoredomains.work'
export const BASE_URL = 'http://localhost:3001'

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(res)
  }
  return res.json()
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(getResponseData)
}


export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(getResponseData)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token)
        return data
      }
    })
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(getResponseData)
    .then((data) => data)
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`}
  })
    .then(getResponseData);
}

export const updateUserData = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then(getResponseData)
}
