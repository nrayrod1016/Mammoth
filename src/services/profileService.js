import * as tokenService from "./tokenService"
const BASE_URL = "/api/profiles"

export function getUserProfile() {
  return fetch(
    `${BASE_URL}/userProfile`,
    {headers: { Authorization: "Bearer " + tokenService.getToken() }},
    { mode: "cors" }
    ).then((res) => res.json())
}

export function getProfile(id) { 
  return fetch(`${BASE_URL}/${id}`,
  {headers: { Authorization: "Bearer " + tokenService.getToken() }},
  { mode: "cors" }
  ).then((res) => res.json())
}

export function updateProfile(profileData) {
  return fetch(`${BASE_URL}/update`, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + tokenService.getToken(), "content-type": "application/json" },
    body: JSON.stringify(profileData),
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}

export function addToCart(productid) {
  return fetch(`${BASE_URL}/${productid}/addToCart`, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + tokenService.getToken(), "content-type": "application/json" },
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}

export function addToWishlist(productid) {
  return fetch(`${BASE_URL}/${productid}/addToWishlist`, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + tokenService.getToken(), "content-type": "application/json" },
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}

export function removeFromCart(productid) {
  return fetch(`${BASE_URL}/${productid}/removeFromCart`, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + tokenService.getToken(), "content-type": "application/json" },
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}

export function removeFromWishlist(productid) {
  return fetch(`${BASE_URL}/${productid}/removeFromWishlist`, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + tokenService.getToken(), "content-type": "application/json" },
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}