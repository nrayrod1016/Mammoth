import * as tokenService from "./tokenService"
const BASE_URL = "/api/reviews"

export function updateReview (id, formData) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,"content-type": "application/json"},
    body: JSON.stringify(formData)
  }, {mode: "cors"})
  .then(res => res.json())
}

export function createReview (type, id, formData) {
  return fetch(`${BASE_URL}/${type}/${id}/create`, {
    method: "POST",
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, "content-type": "application/json"},
    body: JSON.stringify(formData)
  }, {mode: "cors"})
  .then(res => res.json())
}