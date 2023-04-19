export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies'

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(res)
  }
  return res.json()
}

export const getAllMovies = () => {
  return fetch(`${MOVIES_URL}/`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponseData)
}
