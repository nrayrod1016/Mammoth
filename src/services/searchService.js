const BASE_URL = "/api/search"

export function search(query) {
  return fetch(`${BASE_URL}/${query}`)
  .then(res => res.json())
}