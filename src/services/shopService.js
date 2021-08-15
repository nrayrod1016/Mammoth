import * as tokenService from "./tokenService"
const BASE_URL= "/api/shops"

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

export function create(formData) { 
  return fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, "content-type": "application/json"},
    body: JSON.stringify(formData)
  }, { mode: "cors"})
  .then(res => res.json())
}