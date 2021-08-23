import * as tokenService from "./tokenService"
const BASE_URL = '/api/products'

export function getAll() { 
  return fetch(BASE_URL)
  .then(res => res.json())
}

export function getDetails(id) { 
  return fetch(`${BASE_URL}/${id}`)
  .then(res => res.json())
}

export function create (formData, id) {
  return fetch(`${BASE_URL}/${id}/create`, {
    method: "POST",
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, "content-type": "application/json"},
    body: JSON.stringify(formData)
  }, {mode: "cors"})
  .then(res => res.json())
}

export function update (formData, id) {
  return fetch(`${BASE_URL}/${id}/update`, {
    method: "PATCH",
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, "content-type": "application/json"},
    body: JSON.stringify(formData)
  }, {mode: "cors"})
  .then(res => res.json())
}