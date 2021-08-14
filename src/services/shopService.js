import * as tokenService from "./tokenService"
const BASE_URL= "/api/shops"

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}